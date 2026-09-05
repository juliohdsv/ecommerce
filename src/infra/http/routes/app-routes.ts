import type { FastifyInstance } from "fastify";

import { uploadFileRoute } from "./upload-file-route.ts";

export async function appRoutes(server: FastifyInstance) {
  // files
  server.register(uploadFileRoute);
}
