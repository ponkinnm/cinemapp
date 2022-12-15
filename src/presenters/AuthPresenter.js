import React, {useEffect, useState} from 'react';
import SignUpView from "../views/SignUpView";
import {signUp, setUser, login} from "../features/auth/authSlice";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import LoginView from "../views/LoginView";

function AuthPresenter() {
    const [hasAccount, setHasAccount] = useState(false);
    const [error, setError] = useState("");
    const dispatch = useDispatch();

    const navigate = useNavigate();

    async function handleSignup(email, password, displayName) {
        setError("");
        try {
            const user = await signUp(email, password, displayName);
            dispatch(setUser(user));
            //navigate("/game");

        } catch (err) {
            if(err.message.includes("email")){
                setError("Email already in use");
            }
            else if(err.message.includes("weak-password")){
                setError("Password should be at least 6 characters")
            }
            else {
                setError(err.message);
            }
        }
    }

    useEffect(() => {
        setError("");
    }, [hasAccount])


    async function handleLogin(email, password)  {
        setError("");
        try {
            const user = await login(email, password);
            dispatch(setUser(user));
            navigate('/game');
        } catch (err) {
            if (err.message.includes("password")) {
                setError("Invalid password");
            } else {
                setError("Wrong email");
            }
        }
    }

    return (
        !hasAccount ? <SignUpView setHasAccount={setHasAccount} error={error} handleSubmit={handleSignup}/> : <LoginView error={error} handleSubmit={handleLogin}/>
    );
}

export default AuthPresenter;