import type { FastifyInstance } from "fastify";

import { createProductRoute } from "./create-product-route.ts";

export async function appRoutes(app: FastifyInstance) {
  // products
  app.register(createProductRoute);
}
