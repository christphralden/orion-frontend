interface IUser {
  userId: string;
  binusianId: string;
  username: string;
  name: string;
  roles: string[];
  binusianNumber: string;
}

type UserString = string;
export type { IUser, UserString };
