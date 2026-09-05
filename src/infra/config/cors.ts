import Cors from "@fastify/cors";
import type { FastifyInstance } from "fastify";

export const configureCors = async (app: FastifyInstance) => {
  app.register(Cors, { origin: "*" });

  app.log.info({ layer: "infra", service: "cors", status: "ready" });
};
