import path from "node:path";
import YAML from "yamljs";
import swaggerUi from "swagger-ui-express";

const swaggerDocument = YAML.load(
  path.join(process.cwd(), "src", "docs", "auth.yaml")
);

export { swaggerUi, swaggerDocument };