import { IUser } from './user';

export interface IBlog {
  id: string;
  title: string;
  content: string;
  created: string;
  sticky: boolean;
  user: IUser;
}
