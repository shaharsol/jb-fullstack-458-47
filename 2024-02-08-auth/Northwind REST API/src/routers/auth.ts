import express, { Router } from "express";
import validate from "../middlewares/input-validation";
import { signupValidator } from "../controllers/auth/validator";
import { signup } from "../controllers/auth/controller";

const router = Router();

router.post('/register', validate(signupValidator), signup);

export default router;