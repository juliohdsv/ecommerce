import { PrismaPg } from "@prisma/adapter-pg";

import { PrismaClient } from "./generated/prisma/client.ts";
import { env } from "@/env.ts";

export class PrismaORMClient extends PrismaClient {
  constructor() {
    const connectionString = env.DATABASE_URL;
    const adapter = new PrismaPg({ connectionString });

    super({ adapter });
  }

  public get connect(): Promise<void> {
    return this.$connect();
  }

  public get disconnect(): Promise<void> {
    return this.$disconnect();
  }
}
