import { $api } from '.';
import { refresh } from '../../modules/actions.export';

const ApiInterceptor = (store: any) => {
  const {dispatch, getState} = store

  const accessToken = JSON.parse(localStorage.getItem('accessToken') as string) || ''
  const refreshToken = JSON.parse(localStorage.getItem('refreshToken') as string) || ''

  $api.interceptors.request.use((config: any) => {
    config.headers['Authorization'] = `Bearer ${getState().auth.accessToken || accessToken}`
    return config;
  }, (error) => Promise.reject(error)
)


 $api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
          originalRequest._isRetry = true;
          await dispatch(refresh(getState().auth.refreshToken || refreshToken))
          return $api.request(originalRequest);
    }
    return Promise.reject(error);
})
};

export default ApiInterceptor;