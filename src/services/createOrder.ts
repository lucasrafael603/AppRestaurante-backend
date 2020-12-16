import Order from '../models/Order'
import Error from '../models/Error'
import Count from '../services/countOrder'
import VerifyOrder from '../services/verifyOrder'

interface Request {

  order : string

}

class createOrder {
  public async execute({order}: Request): Promise<Order | null | Error >{

      const count = new Count()

      const verifyOrder = new VerifyOrder()

      if(order){

        const regexPeriodo = /^[a-záàâãéèêíïóôõöúçñ]{5}/gi;
        const regexEntrada = /[1]{1}/gi;
        const regexPrincipal = /[2]{1}/gi;
        const regexBebida = /[3]{1}/gi;
        const regexSobremesa = /[4]{1}/gi;
        const regexError = /[5-9]{1}/gi
      
        const periodo = order.match(regexPeriodo)?.toString()
        const entrada = order.match(regexEntrada)?.toString()
        const entradaArray = order.match(regexEntrada)
        const principal = order.match(regexPrincipal)?.toString()
        const principalArray = order.match(regexPrincipal)
        const bebida = order.match(regexBebida)?.toString()
        const bebidaArray = order.match(regexBebida)
        const sobremesa = order.match(regexSobremesa)?.toString()
        const sobremesaArray = order.match(regexSobremesa)
        const findError = order.match(regexError)?.toString()
        

        const arrayBebidas = []
        const arrayPrincipal = []

        arrayPrincipal.push(principalArray)
        arrayBebidas.push(bebidaArray)

      if(entrada || principal || bebidaArray || sobremesa ){ 

          var verifyBebidas
          var verifyEntrada
          var verifyPrincipal
          var verifySobremesa

        if(periodo === 'manha' || periodo === 'Manha' || periodo === 'manhã' || periodo === 'Manhã'){

            const valueSobremesa = sobremesa  ? 'error' : null

         if(arrayBebidas[0]?.length){

             verifyBebidas = await count.execute({order: arrayBebidas[0]?.length})
              
              
            }

          if(entradaArray){

                  verifyEntrada = await verifyOrder.execute({order: entradaArray})

            }

           if(principalArray){

              verifyPrincipal = await verifyOrder.execute({order: principalArray})

            }
           
         
            const ordem = new Order({periodo, entrada: verifyEntrada?.toString(), principal: verifyPrincipal?.toString(), bebida: verifyBebidas?.toString(), sobremesa: valueSobremesa ? valueSobremesa : sobremesa})

              
            return ordem
         

        }else if(periodo === 'noite' || periodo === 'Noite'){


          if(arrayPrincipal[0]?.length){

            verifyPrincipal = await count.execute({order: arrayPrincipal[0]?.length, type: 'noite'})
             
             
           }

          if(entradaArray){

            
            verifyEntrada = await verifyOrder.execute({order: entradaArray, type: 'noite'})

        }

          if(bebidaArray){

        verifyBebidas = await verifyOrder.execute({order: bebidaArray, type: 'noite'})

       }

          if(sobremesaArray){

        verifySobremesa = await verifyOrder.execute({order: sobremesaArray, type: 'noite'})

       }



         const ordem = new Order({periodo, entrada: verifyEntrada?.toString(), principal: verifyPrincipal?.toString(), bebida: verifyBebidas?.toString(), sobremesa: verifySobremesa?.toString()})

          return ordem


        }


      }
     

      }
    
      const error = new Error({message: 'Favor enviar pelo menos uma seleção'})

  return error

}}
  
export default createOrder