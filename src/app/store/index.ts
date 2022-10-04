import { configureStore } from '@reduxjs/toolkit';
import { authReducer, userReducer } from '../../modules/reducers.export';

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer
  },
  devTools: true
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch



