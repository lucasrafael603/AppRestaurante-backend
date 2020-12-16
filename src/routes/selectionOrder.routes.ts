import { Router } from 'express'
import createOrder from '../services/createOrder'

const ServiceOrder = new createOrder()

const selectionOrder = Router()

selectionOrder.post('/', async (request, response) => {

  var {dados} = request.body

  const orderFinish = await ServiceOrder.execute({order: dados})

  response.statusCode = 200

  return response.json(orderFinish)

  })

export default selectionOrder

