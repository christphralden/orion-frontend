class HTTPError extends Error {
  private _status: number;
  private _response: any;
  constructor(message: string, status: number, response?: any) {
    super(message);
    this.name = "HTTPError";
    this._status = status;
    this._response = response;
  }

  public getStatus(): number {
    return this._status;
  }

  public getResponse(): any {
    return this._response;
  }
}

export default HTTPError;
