import { useNavigate } from "react-router-dom";
import LoginModel from "../../../models/LoginModel";
import notify from "../../../services/Notify";
import "./Login.css";
import { useForm } from "react-hook-form";
import auth from "../../../services/Auth";
import { useEffect } from "react";
import { authStore } from "../../../redux/AuthState";

function Login(): JSX.Element {

    const { register, handleSubmit } = useForm<LoginModel>();
    const navigate = useNavigate();

    async function submitLoginData(loginModel: LoginModel): Promise<void> {
        try {
            // service
            await auth.login(loginModel);
            notify.success('you have been successfully logged in');
            navigate('/home');
        } catch (err) {
            notify.error(err);
        }
    }

    useEffect(() => {
        const token = authStore.getState().token;
        if (token) {
            notify.error('You are already logged in, please don\'t login again')
            navigate('/home');
        }
    })

    return (
        <div className="Login">
            <h2>Login</h2>
            <form onSubmit={handleSubmit(submitLoginData)}>
                <label>Email:</label>
                <input type="email" {...register('email')} />
                <label>Password:</label>
                <input type="password" {...register('password')} />
                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;
