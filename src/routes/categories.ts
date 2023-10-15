import { Router } from 'express'
import { findAll, create, update, remove } from '../controllers/categories'
export const categories = Router()

categories
  .get('/', findAll)
  .post('/', create)
  .put('/:id', update)
  .delete('/:id', remove)
