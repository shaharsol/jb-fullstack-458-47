import express, { Router } from "express";
import { getAll, getOne, add, update, patch, remove } from "../controllers/products/controller";
import validate from "../middlewares/input-validation";
import { addProductValidator } from '../controllers/products/validator';

const router = Router();

// router.get('/', getAll) = router.use('GET','/',getAll)
router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', validate(addProductValidator) , add)
router.put('/:id', update)
router.patch('/:id', patch)
router.delete('/:id', remove)

export default router;