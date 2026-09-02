import { app } from "./main.js";
import { env } from "./env.js";

const PORT = env.NODE_PORT;
const ENV = env.NODE_ENV;

app.listen({ port: PORT, host: "0.0.0.0" }, (err, _address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }

  app.log.info(`Server running in ${PORT} on ${ENV} mode.`);
});
