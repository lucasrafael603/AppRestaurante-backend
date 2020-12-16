import { Router } from 'express'
import selectionOrder from './selectionOrder.routes'

const routes = Router()

routes.use('/order', selectionOrder)

export default routes
