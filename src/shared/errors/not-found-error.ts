import { AppHandleError } from "./app-handle-error.ts";

export class NotFoundError extends AppHandleError {
  constructor(message: string = "Resource not found.") {
    super(message, 404, "NOT_FOUND_ERROR");

    this.name = "NotFoundError";
  }
}
