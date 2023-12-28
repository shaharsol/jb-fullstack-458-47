import axios from "axios";
import Signup from "../models/SignupModel";
import appConfig from "../utils/AppConfig";

class Auth {
    public async signup(signup: Signup): Promise<string> {
        const response = await axios.post<string>(appConfig.signupUrl, signup);
        const token = response.data;

        // redux
        
        return token;
    }
}

const auth = new Auth();
export default auth;