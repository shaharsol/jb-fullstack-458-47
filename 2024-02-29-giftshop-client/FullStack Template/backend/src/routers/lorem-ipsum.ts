import { Router } from "express";
import validate from "../middlewares/input-validation";
import { loremIpsumValidator } from "../controllers/lorem-ipsum/validator";
import { loremIpsum } from "../controllers/lorem-ipsum/controller";

const router = Router();

router.post('/lorem-ipsum', validate(loremIpsumValidator), loremIpsum);

export default router;