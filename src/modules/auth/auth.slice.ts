import { AnyAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { AuthApi } from './auth.api';
import { AuthState, IAuthResponse, ILoginData, IRegisterData } from './auth.types';

export const register = createAsyncThunk<IAuthResponse, IRegisterData, {rejectValue: string}>(
  'auth/register',
  async function (data, {rejectWithValue, dispatch}) {
    return await AuthApi.register(data)
    .then(res => {
      dispatch(setAuth(res.data))
      return res.data
    })
    .catch((err: AxiosError<Error>) => rejectWithValue(err.response?.data.message || 'Anuthorized'))
  }
)

export const login = createAsyncThunk<IAuthResponse, ILoginData, {rejectValue: string}>(
  'auth/login',
  async function (data, {rejectWithValue, dispatch}) {
    return await  AuthApi.login(data)
    .then(res => {
      dispatch(setAuth(res.data))
      return res.data
    })
    .catch((err: AxiosError<Error>) => {
      return rejectWithValue(err.response?.data.message || 'Anuthorized')
    })
  }
)

export const refresh = createAsyncThunk<IAuthResponse, string, {rejectValue: string}>(
  'auth/refresh',
  async function (data, {rejectWithValue, dispatch}) {
    return await  AuthApi.refresh(data)
    .then(res => {
      dispatch(setAuth(res.data))
      return res.data
    })
    .catch((err: AxiosError<Error>) => rejectWithValue(err.response?.data?.message || 'Anuthorized'))
  }
)

const initialState: AuthState = {
  user: null,
  role: null,
  accessToken: '',
  refreshToken: '',
  loading: false,
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogout(state) {
      state.user = null
      state.role = null
      state.accessToken = ''
      state.refreshToken = ''
      localStorage.removeItem('user')
      localStorage.removeItem('role')
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
    },
    setAuth(state, action) {
      state.user = action.payload.user
      state.role = action.payload.role
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
      localStorage.setItem('user', JSON.stringify(action.payload.user))
      localStorage.setItem('role', JSON.stringify(action.payload.role))
      localStorage.setItem('accessToken', JSON.stringify(action.payload.accessToken))
      localStorage.setItem('refreshToken', JSON.stringify(action.payload.refreshToken))
    }
  },
  extraReducers: (builder) => {
    builder    
      .addMatcher((action: AnyAction) => action.type.endsWith('/pending'), (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher((action: AnyAction) => action.type.endsWith('/rejected'), (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addMatcher((action: AnyAction) => action.type.endsWith('/fulfilled'), (state) => {
        state.loading = false;
      })
  }
})


export const {setLogout, setAuth}  = authSlice.actions
export default authSlice.reducer