import { AppHandleError } from "./app-handle-error.ts";

export class BadRequestError extends AppHandleError {
  constructor(message: string) {
    super(message, 400, "BAD_REQUEST_ERROR");

    this.name = "BadRequestError";
  }
}
