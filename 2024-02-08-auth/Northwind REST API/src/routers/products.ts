import express, { Router } from "express";
import { getAll, getOne, add, update, patch, remove } from "../controllers/products/controller";
import validate from "../middlewares/input-validation";
import { addProductValidator, patchProductValidator, putProductValidator } from '../controllers/products/validator';

const router = Router();

// router.get('/', getAll) = router.use('GET','/',getAll)
router.get('/', getAll)
router.get('/:id([0-9]+)', getOne)
router.post('/', validate(addProductValidator) , add)
router.put('/:id([0-9]+)', validate(putProductValidator) ,update)
router.patch('/:id([0-9]+)', validate(patchProductValidator), patch)
router.delete('/:id([0-9]+)', remove)

export default router;