// https://blog.openreplay.com/authentication-in-react-18-using-firebase-v9/
import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Alert, Button, Form} from "react-bootstrap";
import {useUserAuth} from "./context/UserAuthContext";


function Signup() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const {signUp, updateDisplayName} = useUserAuth();
    let navigate = useNavigate();

    //console.log(auth.currentUser)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password);
            updateDisplayName(displayName);

            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <div className="p-4 box">
                <h2 className="mb-3">Firebase Auth Signup</h2>

                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit}>
                    <input placeholder="Username" onChange={(e) => setDisplayName(e.target.value)}  type="text" id="displayName"/>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="primary" type="Submit">
                            Sign up
                        </Button>
                    </div>
                </Form>
            </div>
            <div className="p-4 box mt-3 text-center">
                Already have an account? <Link to="/">Log In</Link>
            </div>
        </>
    );
}

export default Signup;
