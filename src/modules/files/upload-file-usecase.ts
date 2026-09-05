import { parse } from "csv-parse";
import type { Readable } from "node:stream";

import { PrismaORMClient } from "@/infra/database/prisma-orm-client.ts";

type UploadFileRequestUsecase = {
  filename: string;
  mimetype: string;
  stream: Readable;
};

type UploadFileReplyUsecase = void;

export class UploadFileUseCase {
  constructor(private readonly db: PrismaORMClient) {}

  async execute({
    filename,
    mimetype,
    stream,
  }: UploadFileRequestUsecase): Promise<UploadFileReplyUsecase> {
    const data: any[] = [];
    const parser = stream.pipe(
      parse({
        columns: true,
        skip_empty_lines: true,
      }),
    );

    for await (const record of parser) {
      const { asin, ...restRecord } = record;

      data.push({
        ...restRecord,
        externalId: asin,
        price: Number.isNaN(restRecord.price) ? 0.0 : Number(restRecord.price),
        listPrice: Number.isNaN(restRecord.listPrice)
          ? 0.0
          : Number(restRecord.listPrice),
        isBestSeller: Boolean(restRecord.isBestSeller),
        boughtInLastMonth: Number(restRecord.boughtInLastMonth),
        filename,
        mimetype,
      });

      if (data.length === 5000) {
        await this.db.product.createMany({
          data,
          skipDuplicates: true,
        });

        data.length = 0;
      }
    }

    if (data.length > 0) {
      await this.db.product.createMany({
        data,
        skipDuplicates: true,
      });
    }

    data.length = 0;
  }
}
