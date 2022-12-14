import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {login, setUser, logOut} from './authSlice'
import { useNavigate} from "react-router-dom";

export default function Auth() {
    const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function handleLogin() {

        const user = await login(email, password);
        dispatch(setUser(user));

    }

    async function handleLogout(){

        try {
            await logOut()
            dispatch(setUser(null))
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <div>
                <div style={{display: 'flex', flexDirection: 'column'}}>

                    <span>{user?.email}</span>
                    <input placeholder={"Email"} onChange={(e) => setEmail(e.target.value)} type={"text"}/>
                    <input placeholder={"Password"} onChange={(e) => setPassword(e.target.value)} type={"password"}/>
                    <button
                        aria-label="Login"
                        onClick={(event) => {
                            event.preventDefault()
                            handleLogin()
                        }}
                    >
                        Login
                    </button>
                    <button onClick={handleLogout}>Log out</button>
                </div>
            </div>
        </div>
)
}