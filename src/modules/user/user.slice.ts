import { AnyAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { UserApi } from './user.api';
import { IUserListResponse, UserState } from './user.types';

export const getUserList = createAsyncThunk<IUserListResponse, undefined, {rejectValue: string}>(
  'user/getAll',
  async function(_, {rejectWithValue}) {
    return await UserApi.getAll().then(res => {
      return res.data
    })
    .catch((err: AxiosError<Error> ) =>  rejectWithValue(err.response?.data.message || 'Error! Can not to get all users...'))
  }
)

export const initialState: UserState = {
  userList: [],
  loading: false,
  error: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
     builder.addCase(getUserList.fulfilled, (state, action) => {
        state.userList = action.payload.users
    })
    .addMatcher((action: AnyAction) => action.type.endsWith('/pending'), (state) => {
      state.loading = true;
      state.error = null;
    })
    .addMatcher((action: AnyAction) => action.type.endsWith('/fulfilled'), (state) => {
      state.loading = false;
    })
    .addMatcher((action: AnyAction) => action.type.endsWith('/rejected'), (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
  }
})


// export const {} = userSlice.actions;
export default userSlice.reducer;