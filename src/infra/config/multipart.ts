import multipart from "@fastify/multipart";
import type { FastifyInstance } from "fastify";

export const configureMultipart = async (app: FastifyInstance) => {
  app.register(multipart, {
    limits: {
      fileSize: 50 * 1024 * 1024 * 1024, // 50 GiB
      // fieldSize: 5 * 1024 * 1024, //5MB
      // fields: 100,
      files: 1,
    },
  });

  app.log.info({
    layer: "infra",
    service: "multipart",
    status: "ready",
  });
};
