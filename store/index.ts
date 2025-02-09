import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userReducer from "./slices/userSlice";
import { reducer as userApiReducer, userApi } from "@/api/userApi";
import { authApi, reducer as authApiReducer } from "@/api/authApi";

const store = configureStore({
  reducer: {
    user: userReducer,
    [userApi.reducerPath]: userApiReducer,
    [authApi.reducerPath]: authApiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
