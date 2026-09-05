import fastify from "fastify";
import {
  validatorCompiler,
  serializerCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";

import { env } from "./env.ts";
import { configureCors } from "./infra/config/cors.ts";
import { configureMultipart } from "./infra/config/multipart.ts";
import { configureErrorHandler } from "./infra/config/error-handler.ts";
import { appRoutes } from "./infra/http/routes/app-routes.ts";

const PORT = env.NODE_PORT;
const ENV = env.NODE_ENV;

export const server = fastify({
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
}).withTypeProvider<ZodTypeProvider>();

server.setSerializerCompiler(serializerCompiler);
server.setValidatorCompiler(validatorCompiler);

async function bootstrap() {
  configureErrorHandler(server);

  await configureCors(server);
  await configureMultipart(server);

  server.register(appRoutes, { prefix: "/api" });

  await server.listen({ port: PORT, host: "127.0.0.1" });
}

bootstrap()
  .then(() => server.log.info(`Server running on port ${PORT} in ${ENV} mode.`))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
