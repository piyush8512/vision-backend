import express from "express";
import helmet from "helmet";
import cors from "cors";

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());

app.get("/health", (_, res) => {
  res.status(200).json({
    success: true,
    message: "Eye Heroes Backend is running 🚀",
  });
});

export default app;