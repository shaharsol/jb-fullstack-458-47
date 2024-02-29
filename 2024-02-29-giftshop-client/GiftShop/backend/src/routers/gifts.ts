import { Router } from "express";
import { add, getAllByAudience, remove } from "../controllers/gifts/controller";
import validate from "../middlewares/input-validation";
import { addGiftValidator } from '../controllers/gifts/validator';

const router = Router();

// http://localhost:8080/api/gifts/audience/3
router.get('/audience/:audienceId', getAllByAudience);
router.post('/', validate(addGiftValidator) , add);
router.delete('/:id', remove);

export default router;