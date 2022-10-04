import { IAppResponse } from '../../shared/types/interfaces';

export type UserState = {
  userList: Array<IUser>
  loading: boolean,
  error: any
}

export interface IUser {
  id: string,
  firstName: string,
  createdAt?: string,
  lastName?: string;
  phone?: string
}

export interface IUserResponse extends IAppResponse {
  user: IUser
}

export interface IUserListResponse extends IAppResponse {
  users: IUser[]
}

