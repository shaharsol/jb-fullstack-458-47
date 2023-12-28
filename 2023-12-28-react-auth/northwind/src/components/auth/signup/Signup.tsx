import { useForm } from "react-hook-form";
import "./Signup.css";
import SignupModel from "../../../models/SignupModel";
import notify from "../../../services/Notify";
import auth from "../../../services/Auth";
import { useNavigate } from "react-router-dom";


function Signup(): JSX.Element {

    const { register, handleSubmit } = useForm<SignupModel>();
    const navigate = useNavigate();

    async function submitUserData(signupModel: SignupModel): Promise<void> {
        try {
            // service
            await auth.signup(signupModel);
            notify.success('you have been successfully signed up');
            navigate('/home');
        } catch (err) {
            notify.error(err);
        }
    }

    return (
        <div className="Signup">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit(submitUserData)}>
                <label>First name:</label>
                <input type="text" {...register('firstName')} />
                <label>Last name:</label>
                <input type="text"  {...register('lastName')} />
                <label>Email:</label>
                <input type="email" {...register('email')} />
                <label>Password:</label>
                <input type="password" {...register('password')} />
                <button>Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;
