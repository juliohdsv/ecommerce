import { AppHandleError } from "./app-handle-error.ts";

export class BadGatewayError extends AppHandleError {
  constructor(message: string = "Error communicating with external service") {
    super(message, 502, "BAD_GATEWAY_ERROR");

    this.name = "BadGatewayError";
  }
}
