import { ZodError, flattenError } from "zod";
import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

import { AppHandleError } from "@/shared/errors/app-handle-error.ts";

export const configureErrorHandler = (server: FastifyInstance) => {
  const timestamp = new Date().toISOString();

  server.setErrorHandler(
    (error: Error, _request: FastifyRequest, reply: FastifyReply) => {
      if (error instanceof ZodError) {
        return reply.status(400).send({
          error: {
            message: "Validation error.",
            issues: flattenError(error).fieldErrors,
          },
          timestamp,
        });
      }

      if (error instanceof AppHandleError) {
        return reply.status(error.statusCode).send({
          error: {
            message: error.message,
          },
          timestamp,
        });
      }

      server.log.error(error);

      return reply.status(500).send({
        error: {
          message: error.message,
        },
        timestamp,
      });
    },
  );
};
