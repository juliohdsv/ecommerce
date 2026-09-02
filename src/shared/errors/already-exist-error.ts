import { AppHandleError } from "./app-handle-error.ts";

export class AlreadyExistError extends AppHandleError {
  constructor(message = "Already exist.") {
    super(message, 409, "ALREADY_EXIST_ERROR");

    this.name = "AlreadyExistError";
  }
}
