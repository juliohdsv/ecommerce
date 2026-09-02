import { AppHandleError } from "./app-handle-error.ts";

export class ForbiddenError extends AppHandleError {
  constructor(
    message: string = "You do not have permission to access this resource.",
  ) {
    super(message, 403, "FORBIDDEN_ERROR");

    this.name = "ForbiddenError";
  }
}
