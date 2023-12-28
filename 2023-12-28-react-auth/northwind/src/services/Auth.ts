import axios from "axios";
import Signup from "../models/SignupModel";
import appConfig from "../utils/AppConfig";
import { AuthAction, AuthActionType, authStore } from "../redux/AuthState";
import Login from "../models/LoginModel";

class Auth {
    public async signup(signup: Signup): Promise<string> {
        const response = await axios.post<string>(appConfig.signupUrl, signup);
        const token = response.data;

        // redux
        const action: AuthAction = {
            type: AuthActionType.Signup,
            payload: token
        }

        // now all is left to do, is to send this action to redux
        authStore.dispatch(action);

        return token;
    }

    public async login(login: Login): Promise<string> {
        // login actions work in HTTP POST instead of GET
        const response = await axios.post<string>(appConfig.loginUrl, login);
        const token = response.data;

        // redux
        const action: AuthAction = {
            type: AuthActionType.Login,
            payload: token
        }

        // now all is left to do, is to send this action to redux
        authStore.dispatch(action);

        return token;
    }

}

const auth = new Auth();
export default auth;