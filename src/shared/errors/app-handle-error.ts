export class AppHandleError extends Error {
  public readonly _statusCode: number;
  public readonly _code: string;

  constructor(
    message = "Application error.",
    statusCode = 400,
    code = "APP_ERROR",
  ) {
    super(message);

    this.name = "AppHandleError";
    this._statusCode = statusCode;
    this._code = code;

    Error.captureStackTrace(this, this.constructor);
  }

  public get statusCode(): number {
    return this._statusCode;
  }

  public get code(): string {
    return this._code;
  }
}
