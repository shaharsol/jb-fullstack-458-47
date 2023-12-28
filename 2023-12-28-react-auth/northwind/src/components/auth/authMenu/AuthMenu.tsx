import { useEffect, useState } from "react";
import "./AuthMenu.css";
import { authStore } from "../../../redux/AuthState";
import { NavLink } from "react-router-dom";
import Signup from "../../../models/SignupModel";
import { jwtDecode } from "jwt-decode";

function AuthMenu(): JSX.Element {

    type User = {
        firstName: string,
        lastName: string
    };

    const [user, setUser] = useState<User>();

    useEffect(() => {
        // init the token the 1st time the component is mounted
        const token = authStore.getState().token;
        if (token) {
            const user = jwtDecode<{ user: User }>(token).user;
            setUser(user);
        }

        // subscribe to changes
        const unsubscribe = authStore.subscribe(() => {
            const token = authStore.getState().token;
            if (token) {
                const user = jwtDecode<{ user: User }>(token).user;
                console.log(user)
                setUser(user);
            }
        });

        return unsubscribe;
    }, [])


    return (
        <div className="AuthMenu">
            {!user &&
                <div>
                    <span>Hello Guest | </span>
                    <NavLink to="/signup">Sign Up</NavLink>
                    <span> | </span>
                    <NavLink to="/login">Login</NavLink>
                </div>
            }
            {user &&
                <div>
                    <span>Hello {user.firstName} | </span>
                    <NavLink to="/home">Logout</NavLink>
                </div>
            }
        </div>
    );
}

export default AuthMenu;
