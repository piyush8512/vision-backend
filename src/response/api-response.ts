import { Response } from "express";

interface SuccessResponse<T> {
  message: string;
  data?: T;
  statusCode?: number;
}

interface ErrorResponse {
  message: string;
  errors?: unknown;
  statusCode?: number;
}

export function sendSuccess<T>(
  res: Response,
  {
    message,
    data,
    statusCode = 200,
  }: SuccessResponse<T>
) {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
}

export function sendError(
  res: Response,
  {
    message,
    errors,
    statusCode = 500,
  }: ErrorResponse
) {
  return res.status(statusCode).json({
    success: false,
    message,
    errors,
  });
}