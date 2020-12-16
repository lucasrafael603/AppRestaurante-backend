import Order from '../models/Order'
import Error from '../models/Error'

interface Request {

  order : number | []
  type ?: string

}

class countOrder {
  public async execute({order: arrayLength, type = 'Manhã'}: Request): Promise<Order | null | Error | string >{

      if(arrayLength){

        if(type === 'Manhã'){

        const lengthOrders = arrayLength > 1 ? `café(x${arrayLength})` : 'café'
        
        return lengthOrders

        }else{

          const lengthOrders = arrayLength > 1 ? `batata(x${arrayLength})` : 'batata'
        
        return lengthOrders


        }


      }

  return null

}}
  
export default countOrder
