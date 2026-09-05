import type { FastifyReply, FastifyRequest } from "fastify";

import { UploadFileUseCase } from "./upload-file-usecase.ts";
import { BadRequestError } from "@/shared/errors/bad-request-error.ts";
import { fileSchema } from "@/infra/http/schemas/upload-file-schema.ts";

export class UploadFileController {
  constructor(private readonly uploadFileUseCase: UploadFileUseCase) {}

  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const file = await request.file();

      if (!file) {
        throw new BadRequestError("File is required");
      }

      const validation = fileSchema.safeParse({
        filename: file.filename,
        mimetype: file.mimetype,
      });

      if (!validation.success) {
        throw new BadRequestError("Invalid file");
      }

      console.log({
        filename: file.filename,
        mimetype: file.mimetype,
        stream: file.file,
      });

      await this.uploadFileUseCase.execute({
        filename: file.filename,
        mimetype: file.mimetype,
        stream: file.file,
      });

      return reply.status(202).send({
        message: "File received successfully.",
        data: {
          filename: file.filename,
          mimetype: file.mimetype,
        },
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      if (error instanceof BadRequestError) {
        return reply.status(error.statusCode).send({
          error: {
            message: error.message,
          },
          timestamp: new Date().toISOString(),
        });
      }

      throw error;
    }
  }
}
