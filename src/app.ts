import express from "express";
import helmet from "helmet";
import cors from "cors";
import pinoHttp from "pino-http";
import { logger } from "./config/logger.js";
import { errorHandler } from "./middleware/error-handler.js";




const app = express();

app.use(helmet());

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(
  pinoHttp({
    logger,
  })
  
);


app.use(express.json());

app.get("/health", (_, res) => {
  res.status(200).json({
    success: true,
    message: "Eye Heroes Backend is running 🚀",
  });
});
app.use(errorHandler);

export default app;