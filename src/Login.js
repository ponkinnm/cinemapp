import React, {useState} from 'react';
import { useNavigate} from "react-router-dom";
import {useUserAuth} from "./context/UserAuthContext";
import {Alert, Button, Form} from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";


function Login() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const {logIn} = useUserAuth();
    const navigate = useNavigate();
    const navigateToGame = () => {
        navigate('game');
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            navigateToGame();
        }
        catch(err) {
            if (err.message.includes("password")) {
                setError("Invalid password");
            } else {
                setError("Wrong email");
            }
        }
    };

    return (
        <>
        <div className="p-4 box">
            <h2 className="mb-3"></h2>

            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleLogin}>
                <FloatingLabel label="Email" className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        placeholder="Enter email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    /></FloatingLabel>
                <FloatingLabel label="Password" className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        placeholder="Enter password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    /></FloatingLabel>
                <div className="d-grid gap-2">
                <Button variant="primary" type="Submit" >Login</Button>
                </div>
            </Form>
        </div>
        </>
    );
}

export default Login;
