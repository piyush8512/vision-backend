import express from "express";
import helmet from "helmet";
import cors from "cors";
import pinoHttp from "pino-http";
import { logger } from "./config/logger.js";
import { errorHandler } from "./middleware/error-handler.js";
import routes from "./routes/index.js";
import swaggerUi from "swagger-ui-express";
import { swaggerDocument, } from "./docs/swagger.js";

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
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
)
app.use(routes);

app.use(errorHandler);

export default app;