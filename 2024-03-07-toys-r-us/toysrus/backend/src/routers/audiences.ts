import { Router } from "express";
import { getAll } from "../controllers/audience/controller";

const router = Router();

router.get('/', getAll);

export default router;