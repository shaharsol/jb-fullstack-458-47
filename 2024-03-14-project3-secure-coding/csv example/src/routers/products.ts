import { Router } from "express";
import { bar, list, sendCSV } from "../controllers/products/controller";

const router = Router();

router.get('/csv', sendCSV);
router.get('/bar', bar);
router.get('/list', list);

export default router;