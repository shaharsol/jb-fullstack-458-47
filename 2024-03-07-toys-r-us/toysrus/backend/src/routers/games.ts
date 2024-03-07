import { Router } from "express";
import validate from "../middlewares/input-validation";
import { add, getAllForAudience, getCheaperThan, remove } from "../controllers/game/controller";
import { addGameValidator } from "../controllers/game/validator";

const router = Router();

router.get('/audience/:audienceId', getAllForAudience);
router.get('/cheaper-than/:price', getCheaperThan);
router.post('/', validate(addGameValidator), add);
router.delete('/:id', remove);

export default router;