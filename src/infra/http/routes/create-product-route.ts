import type { FastifyInstance } from "fastify";

export function createProductRoute(app: FastifyInstance) {
  app.get("/users", async () => {
    console.log("Test");
  });
}
