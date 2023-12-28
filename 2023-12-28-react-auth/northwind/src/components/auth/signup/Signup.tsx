import { useForm } from "react-hook-form";
import "./Signup.css";
import SignupModel from "../../../models/SignupModel";
import notify from "../../../services/Notify";


function Signup(): JSX.Element {

    const { register, handleSubmit } = useForm<SignupModel>();

    async function submitUserData(signupModel: SignupModel): Promise<void> {
        try {
            // service
        } catch (err) {
            notify.error(err);
        }
    }

    return (
        <div className="Signup">
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
