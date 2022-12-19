import React, {useEffect, useState} from 'react';
import SignUpView from "../views/SignUpView";
import {signUp, setUser, login, deleteCurrentUser} from "../features/auth/authSlice";
import {useNavigate} from "react-router-dom";
import {ref, get, set} from 'firebase/database'
import {auth} from '../firebaseConfig'
import {database} from "../firebaseConfig";
import {useDispatch} from "react-redux";
import LoginView from "../views/LoginView";

function AuthPresenter() {
    const [hasAccount, setHasAccount] = useState(true);
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();



    async function checkIfUsernameAlreadyTaken(displayName, email) {
        const dbRef = (ref(database, 'users'));
        let checker = 0;
        get(dbRef)
            .then(response => {
                if (response.hasChildren()) {
                    checker = Object.keys(response.val()).length - 1;
                    response.forEach((child) => {
                        const user = child.val()
                        console.log(user);
                        if (user.username === displayName) {
                            //ta bort skapad authentication
                            setError("Username already taken")
                            setHasAccount(null);
                            deleteCurrentUser();
                            return Promise.reject(new Error)
                        } else if (!checker) {
                            return writeUserToDatabase(displayName, email)
                        }
                        checker = checker - 1;
                    })
                }
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    function writeUserToDatabase(displayName, email) {
        set(ref(database, 'users/' + auth.currentUser.uid), {
            username: displayName,
            uid: auth.currentUser.uid,
            email: email,
            highScore: []
        }).catch(err => console.error(err.message))
    }

    async function handleSignup(email, password, passwordChecker, displayName) {
        setError("");
        try {

            if(passwordChecker !== password){
                setError("password must be the same")
                return Promise.reject(new Error)
            }
            const user = await signUp(email, password, displayName);
            await checkIfUsernameAlreadyTaken(displayName, email)
            dispatch(setUser(user))

        } catch (err) {
            if (err.message.includes("email")) {
                setError("Email already in use");
            } else if (err.message.includes("weak-password")) {
                setError("Password should be at least 6 characters")
            } else {
                setError(err.message);
            }
        }
    }

    useEffect(() => {
        setError("");
    }, [hasAccount])


    async function handleLogin(email, password) {
        setError("");
        try {
            const user = await login(email, password);
            dispatch(setUser(user));
            navigate('/');
        } catch (err) {
            if (err.message.includes("password")) {
                setError("Invalid password");
            } else {
                setError("Wrong email");
            }
        }
    }

    return (
        !hasAccount ? <SignUpView setHasAccount={setHasAccount} error={error} handleSubmit={handleSignup}/> :
            <LoginView setHasAccount={setHasAccount} error={error} handleSubmit={handleLogin}/>
    );
}

export default AuthPresenter;
