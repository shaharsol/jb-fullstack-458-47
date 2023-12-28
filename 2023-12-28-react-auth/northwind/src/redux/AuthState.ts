import { createStore } from "redux";

// 1. state
export class AuthState {
    public token: string = '';
}

// 2. action types
export enum AuthActionType {
    Signup = 'Signup',
    Login = 'Login',
    Logout = 'Logout',
}

// 3. action
export interface AuthAction {
    type: AuthActionType,
    payload: any,
}

// 4. reducer
export function authReducer(currentState = new AuthState(), action: AuthAction): AuthState {
    const newState = { ...currentState };

    switch (action.type) {
        case AuthActionType.Signup:
            // ...
            break;
        case AuthActionType.Login:
            // ...
            break;
        case AuthActionType.Logout:
            // ...
            break;

    }

    return newState;
}

// 5. store
export const authStore = createStore(authReducer);