import express, { Router } from "express";
import { getAll, getOne, add } from "../controllers/products/controller";

const router = Router();

router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', add)

export default router;