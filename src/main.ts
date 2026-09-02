import fastify from "fastify";

import { cors } from "./infra/config/cors.js";
import { env } from "./env.js";

import { appRoutes } from "./infra/http/routes/app-routes.js";

export const app = fastify({
  logger:
    env.NODE_ENV === "production"
      ? true
      : {
          transport: {
            target: "pino-pretty",
            options: {
              translateTime: "HH:MM:ss",
              ignore: "pid.hostname",
            },
          },
        },
});

await cors(app);
await appRoutes(app);
