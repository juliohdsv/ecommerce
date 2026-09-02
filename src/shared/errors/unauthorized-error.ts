import { AppHandleError } from "./app-handle-error.ts";

export class UnauthorizedError extends AppHandleError {
  constructor(message: string = "Authentication required.") {
    super(message, 401, "UNAUTHORIZED_ERROR");

    this.name = "UnauthorizedError";
  }
}
