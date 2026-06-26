import { Request, Response } from "express";
import { asyncHandler } from "../../utils/async-handler.js";
import { sendSuccess } from "../../utils/api-response.js";

import {
  signup as signupService,
  login as loginService,
  forgotPassword as forgotPasswordService,
  googleLogin as googleLoginService,
  logout as logoutService,
} from "./auth.service.js";

export const signup = asyncHandler(async (req: Request, res: Response) => {
  const result = await signupService(req.body);

  return sendSuccess(res, {
    statusCode: 201,
    message: "User created successfully.",
    data: result,
  });
});



export const login = asyncHandler(async (req: Request, res: Response) => {
  const result = await loginService(req.body);

  return sendSuccess(res, {
    statusCode: 200,
    message: "Login successful.",
    data: result,
  });
});


export const me = asyncHandler(async (req: Request, res: Response) => {
  return sendSuccess(res, {
    statusCode: 200,
    message: "Current user fetched successfully.",
    data: req.user,
  });
});


export const forgotPassword = asyncHandler(
  async (req: Request, res: Response) => {
    await forgotPasswordService(req.body);

    return sendSuccess(res, {
      statusCode: 200,
      message: "Password reset email sent successfully.",
    });
  }
);

export const logout = asyncHandler(async (_req: Request, res: Response) => {
  await logoutService();
  return sendSuccess(res, {
    statusCode: 200,
    message: "Logged out successfully.",
  });
});

export const googleLogin = asyncHandler(
  async (_req: Request, res: Response) => {
    const result = await googleLoginService();

    return sendSuccess(res, {
      statusCode: 200,
      message: "Google authentication initiated.",
      data: result,
    });
  }
);