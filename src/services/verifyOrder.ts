import Order from '../models/Order'
import Error from '../models/Error'

interface Request {

  order : string | RegExpMatchArray 
  type?: string

}

class verifyOrder {
  public async execute({order: orderLength, type = 'Manhã'}: Request): Promise<Order | null | Error | string  >{


      if(orderLength) {

        if(type === 'Manhã'){

          const verify = orderLength.length > 1 ? 'error' : orderLength.toString()[0]

          switch(verify){
            
            case '1' || 1:
              return 'ovos'
              break
            case '2' || 2:
              return 'torradas'
              break
            case '4' || 4:
              return 'error'
              break
            default:
            return verify
            break
            

          }
        }else{

          const verify = orderLength.length > 1 ? 'error' : orderLength.toString()[0]

          switch(verify){
            
            case '1' || 1:
              return 'bife'
              break
            case '3' || 3:
              return 'vinho'
              break
            case '4' || 4:
              return 'bolo'
              break
            default:
            return verify
            break
            


        }
      }

         }

  
  return null

}}
  
export default verifyOrder
