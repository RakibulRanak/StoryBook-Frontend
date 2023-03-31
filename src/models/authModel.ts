export interface SignInPayload {
    username: string;
    password: string;
}

export interface SignUpPayload extends SignInPayload {
    name: string;
    email: string;
    confirmPassword: string;
}

export interface User extends SignInPayload {
    name: string;
    email: string;
}

// after implementing apis, users : User[] will be removed
export interface AuthState {
    users: User[]
    username?: string;
    loggedIn: boolean;
    accessToken?: string;
}
