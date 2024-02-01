import express, { Router } from "express";
import { getAll, getOne, add, update, patch, remove } from "../controllers/products/controller";

const router = Router();

router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', add)
router.put('/:id', update)
router.patch('/:id', patch)
router.delete('/:id', remove)

export default router;