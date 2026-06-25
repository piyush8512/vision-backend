import { Router } from "express";
import { sendSuccess } from "../response/api-response.js";

const router = Router();

router.get("/", (_, res) => {
  return sendSuccess(res, {
    message: "Eye Heroes Backend is running 🚀",
  });
});

export default router;