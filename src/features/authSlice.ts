import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import users from '../storage/users.json'
import { AuthState, SignInPayload, SignUpPayload, User } from '../models/userModel'

const initialState: AuthState = {
    users: users,
    username: '',
    loggedIn: false,
    accessToken: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state: AuthState, action: PayloadAction<SignInPayload>) => {
            /// first api call to backend, if successful reuturns with jwt refresh token and access token, access token saved in state, refresh token in storage
            const loggedInUser: User | undefined = state.users.find(obj => obj.username === action.payload.username && obj.password === action.payload.password)
            if (loggedInUser) {
                state.username = loggedInUser.username;
                state.loggedIn = true;
            }

        },
        signUp: (state: AuthState, action: PayloadAction<SignUpPayload>) => {
            state.users.push(action.payload)
        },
        signOut: (state: AuthState) => {
            state.username = '';
            state.loggedIn = false;
        }
    }
})

export const { signIn, signOut, signUp } = authSlice.actions;
export default authSlice.reducer
