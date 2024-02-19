import express, { Router } from "express";
import validate from "../middlewares/input-validation";
import { signupValidator, loginValidator } from "../controllers/auth/validator";
import { signup, login } from "../controllers/auth/controller";
import enforceGuest from "../middlewares/enforce-guest";

const router = Router();
router.use(enforceGuest);

router.post('/register', validate(signupValidator), signup);
router.post('/login', validate(loginValidator), login);

export default router;