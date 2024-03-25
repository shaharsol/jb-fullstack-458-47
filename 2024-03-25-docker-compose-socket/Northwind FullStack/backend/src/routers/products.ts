import express, { Router } from "express";
import { getAll, getOne, add, update, patch, remove } from "../controllers/products/controller";
import validate from "../middlewares/input-validation";
import { addProductValidator, patchProductValidator, putProductValidator } from '../controllers/products/validator';
import enforceAdmin from "../middlewares/enforce-admin";
import addImageToBody from "../middlewares/add-image-to-body";
import uploadImage from "../middlewares/upload-image";

const router = Router();
// router.get('/', getAll) = router.use('GET','/',getAll)
router.get('/', getAll)
router.get('/:id([0-9]+)', getOne)
router.post('/', addImageToBody, validate(addProductValidator) ,uploadImage ,add)
router.put('/:id([0-9]+)', addImageToBody, validate(putProductValidator), uploadImage ,update)
router.patch('/:id([0-9]+)', addImageToBody, validate(patchProductValidator), uploadImage, patch)
router.delete('/:id([0-9]+)', enforceAdmin ,remove)

export default router;