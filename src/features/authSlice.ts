import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import users from "../storage/users.json";
import {
  AuthState,
  SignInPayload,
  SignUpPayload,
  SetUser,
  AccessToken,
} from "../models/userModel";

const initialState: AuthState = {
  username: localStorage.getItem("username") || "",
  loggedIn: localStorage.getItem("loggedIn") ? true : false,
  access_token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setNewAccessToken: (state: AuthState, action: PayloadAction<any>) => {
      console.log(action.payload.access_token);
      state.access_token = action.payload.access_token;
    },
    setUser: (state: AuthState, action: PayloadAction<SetUser>) => {
      /// first api call to backend, if successful reuturns with jwt refresh token and access token, access token saved in state, refresh token in storage
      state.username = action.payload.username;
      state.loggedIn = action.payload.loggedIn;
      state.access_token = action.payload.access_token;
      localStorage.setItem("username", action.payload.username!);
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("refresh_token", action.payload.refresh_token!);
    },
    removeUser: (state: AuthState) => {
      localStorage.clear();
      state.username = "";
      state.loggedIn = false;
      state.access_token = "";
    },
  },
});

export const { setUser, removeUser, setNewAccessToken } = authSlice.actions;
export default authSlice.reducer;
