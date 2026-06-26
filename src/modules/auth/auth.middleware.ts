import { NextFunction, Request, Response } from "express";
import { supabase } from "../../lib/supabase.js";
import { AppError } from "../../utils/error/app-error.js";

export async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      throw new AppError("Unauthorized", 401);
    }

    const token = authHeader.split(" ")[1];

    const { data, error } = await supabase.auth.getUser(token);

    if (error || !data.user) {
      throw new AppError("Invalid or expired token", 401);
    }

    req.user = data.user;

    next();
  } catch (error) {
    next(error);
  }
}