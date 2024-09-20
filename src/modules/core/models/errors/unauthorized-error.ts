class UnauthorizedError extends Error {
  constructor() {
    super();
    this.message = "Unauthorized action";
    this.name = "UnauthorizedError";
  }
}

export default UnauthorizedError;
