import { createStore } from "redux";

// 1. state
export class AuthState {
    public token: string = '';
    public constructor() {
        this.token = localStorage.getItem('token') || '';
    }
}

// 2. action types
export enum AuthActionType {
    Signup = 'Signup',
    Login = 'Login',
    Logout = 'Logout',
}

// 3. action
export type AuthActionPayload = string | null;
export interface AuthAction {
    type: AuthActionType,
    payload: AuthActionPayload,
}

// 4. reducer
export function authReducer(currentState = new AuthState(), action: AuthAction): AuthState {
    const newState = { ...currentState };

    switch (action.type) {
        case AuthActionType.Signup: // payload here is the token
        case AuthActionType.Login: // payload here is the token
            newState.token = action.payload as string;
            localStorage.setItem('token', newState.token);
            console.log(`our jwt is ${action.payload}`)
            break;
        case AuthActionType.Logout:
            newState.token = '';
            localStorage.removeItem('token');
            break;

    }

    return newState;
}

// 5. store
export const authStore = createStore(authReducer);