import type { FastifyInstance } from "fastify";

import { makeUploadFileController } from "@/modules/files/make-upload-file-controller.ts";
import {
  fileSchemaResponseError,
  fileSchemaResponseSuccess,
} from "../schemas/upload-file-schema.ts";

export async function uploadFileRoute(server: FastifyInstance) {
  const controller = makeUploadFileController();

  server.post(
    "/v1/files/upload",
    {
      schema: {
        tags: ["files"],
        response: {
          202: fileSchemaResponseSuccess,
          400: fileSchemaResponseError,
          404: fileSchemaResponseError,
        },
      },
    },
    controller.handle.bind(controller),
  );
}
