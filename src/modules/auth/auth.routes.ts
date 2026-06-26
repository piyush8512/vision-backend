import { Router } from "express";
import { signup, login, me,  logout,
  googleLogin,
  forgotPassword, } from "./auth.controller.js";
import { validate } from "../../middleware/validate.js";
import { loginSchema, signupSchema ,forgotPasswordSchema } from "./auth.validation.js";
import { authenticate } from "./auth.middleware.js";


const router = Router();

router.post(
  "/signup",
  validate(signupSchema),
  signup
);
router.post(
    "/login",
    validate(loginSchema),
    login
);
router.get(
  "/me",
  authenticate,
  me
);

router.post(
  "/forgot-password",
  validate(forgotPasswordSchema),
  forgotPassword
);

router.post("/logout", logout);

router.get("/google", googleLogin);

export default router;