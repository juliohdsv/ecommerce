import { UploadFileUseCase } from "./upload-file-usecase.ts";
import { UploadFileController } from "./upload-file-controller.ts";
import { PrismaORMClient } from "@/infra/database/prisma-orm-client.ts";

export function makeUploadFileController() {
  const prismaORMClient = new PrismaORMClient();
  const uploadFileUseCase = new UploadFileUseCase(prismaORMClient);
  const uploadFileController = new UploadFileController(uploadFileUseCase);

  return uploadFileController;
}
