import express, { Router } from "express";
import { getAll, getOne, add, update, patch } from "../controllers/products/controller";

const router = Router();

router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', add)
router.put('/:id', update)
router.patch('/:id', patch)

export default router;