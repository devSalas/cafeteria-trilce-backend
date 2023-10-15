import { Request, Response } from 'express'
import { getAllOrders, addOrder, updateOrder, deleteOrder } from '../models/orders'
import { validarOrder, partialValidarOrder } from '../schemas/orderSchema'

export const findAll = async (req: Request, res: Response) => {
  const data = await getAllOrders()
  res.json({
    data
  })
}

export const create = async (req: Request, res: Response) => {
  const result = validarOrder(req.body)

  if (result.success) {
    const data = await addOrder(result.data)
    res.json({
      data
    })
  } else {
    res.status(404).json({ data: result.error })
  }
}

export const update = async (req: Request, res: Response) => {
  const result = partialValidarOrder(req.body)

  if (result.success) {
    const { id } = req.params
    const data = await updateOrder(+id, result.data)
    res.json({
      data
    })
  } else {
    res.status(404).json({ data: result.error })
  }
}
export const remove = async (req: Request, res: Response) => {
  const { id } = req.params
  const data = await deleteOrder(+id)
  res.json({
    data
  })
}