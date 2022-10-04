import { AxiosPromise } from 'axios';
import { $api, api } from '../../app/api';
import { IAuthResponse, ILoginData, IRegisterData } from './auth.types';

export const AuthApi = {
  register: (data: IRegisterData): AxiosPromise<IAuthResponse> => $api.post('api/auth/register', data),
  login: (data: ILoginData): AxiosPromise<IAuthResponse> => $api.post('api/auth/login', data),
  refresh: (data: string): AxiosPromise<IAuthResponse> => api.post('api/auth/refresh-token', {token: data})
}