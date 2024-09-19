import apiClient from "@core/api/api-client";

type AuthRequest = {
  username: string;
  password: string;
};

type AuthResponse = {
  BinusianId: string;
  Name: string;
  Role: string;
  UserId: string;
  UserName: string;
};

interface IResponse<T> {
  message: string;
  status: boolean;
  errors?: any;
  data: T;
}

async function messierLogin({ username, password }: AuthRequest) {
  const res = await apiClient.post<AuthRequest, IResponse<AuthResponse>>({
    url: "auth/login-messier",
    data: {
      username: username,
      password: password,
    },
    options: {
      credentials: "include",
    },
  });

  console.log(res.data);
}

export { messierLogin };
