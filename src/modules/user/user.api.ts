import { AxiosPromise } from 'axios';
import { $api } from '../../app/api';
import { IUserListResponse } from './user.types';

export const UserApi = {
  getAll: (): AxiosPromise<IUserListResponse> => $api.get('api/users')
}
