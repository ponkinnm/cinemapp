import React, {useEffect, useState} from 'react';
import SignUpView from "../views/SignUpView";
import {signUp, setUser, login, deleteCurrentUser} from "../features/auth/authSlice";
import {useNavigate} from "react-router-dom";
import {ref, get, set} from 'firebase/database'
import {auth} from '../firebaseConfig'
import {database} from "../firebaseConfig";
import {useDispatch} from "react-redux";
import LoginView from "../views/LoginView";
import {onAuthStateChanged} from 'firebase/auth'

function AuthPresenter() {
    const [hasAccount, setHasAccount] = useState(false);
    const [error, setError] = useState("");
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => dispatch(setUser(user?.toJSON())))
    }, [])

    async function checkIfUsernameAlreadyTaken(displayName, email) {
        const dbRef = (ref(database, 'users'));
        get(dbRef)
            .then(response => {
                if (response.hasChildren()) {
                    response.forEach((child) => {
                        const user = child.val()
                        console.log(user);
                        if (user.username === displayName) {
                            //ta bort skapad authentication
                            return deleteCurrentUser();

                        } else {
                            return writeUserToDatabase(displayName, email)

                        }
                    })
                }
                //checker
                console.log(response);
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
            highScore: 0
        }).catch(err => console.error(err.message))
    }

    async function handleSignup(email, password, displayName) {
        setError("");
        try {
            const user = await signUp(email, password, displayName);
            await checkIfUsernameAlreadyTaken(displayName, email)
            dispatch(setUser(user))
            //navigate("/game");

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
        !hasAccount ? <SignUpView setHasAccount={setHasAccount} error={error} handleSubmit={handleSignup}/> :
            <LoginView setHasAccount={setHasAccount} error={error} handleSubmit={handleLogin}/>
    );
}

export default AuthPresenter;
