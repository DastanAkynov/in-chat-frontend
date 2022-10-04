import { AppInitialState, IAppResponse } from '../../shared/types/interfaces';
import { IUser } from '../user/user.types';

export interface IAuthResponse extends IAppResponse {
  user: IUser | null;
  role: string | null;
  accessToken: string;
  refreshToken: string
} 

export interface IRegisterData {
  firstName: string
  email: string;
  password: string
} 

export interface ILoginData {
  email: string;
  password: string
} 

export interface AuthState extends AppInitialState  {
  user: IUser | null;
  role: string | null;
  accessToken: string;
  refreshToken: string
}

