export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  isAdmin?: boolean;
  isBlocked?: boolean;
  cart: [];
}
