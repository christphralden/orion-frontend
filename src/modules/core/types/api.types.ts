interface IResponse<T> {
  message: string;
  status: boolean;
  errors?: any;
  data: T;
}

export type { IResponse };
