import axios from "axios";
import { authStore } from "../redux/AuthState";

class Interceptors {

    public create(): void {
        axios.interceptors.request.use(requestObject => {
            const token = authStore.getState().token;
            if (token) {
                requestObject.headers.Authorization = `Bearer ${token}`;
            }
            return requestObject;
        })
    }
}

const interceptors = new Interceptors();
export default interceptors;