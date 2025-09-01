import {Router} from 'express'

export const homesforsaleRouter = Router()

import { postaddHomesforSale, getAllHomesforSale, getHomesforSale, getHomesforSaleId, putEditHomesforSale, deleteHomesforSale } from '../controllers/homesforsale.controller.js'

homesforsaleRouter.post('/', postaddHomesforSale)

homesforsaleRouter.get('/', getAllHomesforSale)

homesforsaleRouter.get('/async', getHomesforSale)

homesforsaleRouter.get('/id', getHomesforSaleId)

homesforsaleRouter.put('/update', putEditHomesforSale)

homesforsaleRouter.delete('/delete', deleteHomesforSale)


