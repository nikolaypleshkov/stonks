import { IUser } from "@/models/IUser";
import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  user: IUser | null;
  token: string | null;
}

const initialState: UserState = {
  user: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: { payload: IUser }) {
      state.user = action.payload;
    },
    setToken(state, action: { payload: string }) {
      state.token = action.payload;
    },
  },
});

export const { setUser, setToken } = userSlice.actions;
export default userSlice.reducer;