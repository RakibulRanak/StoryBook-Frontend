export interface SignInPayload {
    username: string;
    password: string;
}

export interface SignUpPayload extends SignInPayload {
    name: string;
    email: string;
    confirmPassword: string;
}

export interface RefreshToken {
    refresh_token: string;
}
export interface AccessToken {
    access_token: string;
}


export interface User extends SignInPayload {
    name: string;
    email: string;
}
export interface Token {
    access_token : string;
    refresh_token : string;
}
export interface SignInResponse {
    data : Token
}
// after implementing apis, users : User[] will be removed
export interface AuthState {
    username?: string;
    loggedIn: boolean;
    access_token?: string;
}

export interface SetUser extends AuthState {
    refresh_token?: string;
}