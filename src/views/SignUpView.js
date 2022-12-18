
// https://blog.openreplay.com/authentication-in-react-18-using-firebase-v9/
import React, { useState} from "react";
import {Alert, Button, Form} from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";

// have a handler function that checks if the username is already taken
// and then deletes the currentUser and shows a error message indicating
// username already taken, maybe have one that checks this when typing the
// username in realtime
//Todo: Error handling when username is taken did not work, tried many things
function SignUpView({error, handleSubmit, setHasAccount}) {
    const [email, setEmail] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [password, setPassword] = useState("");

    function onSubmit(e) {
        e.preventDefault();
        handleSubmit(email, password, displayName)
    }

    return (
        <>
            <div className="p-4 box">
                <h2 className="mb-3">Signup</h2>

                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3" controlId="displayName">
                        <FloatingLabel label="Username" className="mb-3">
                        <Form.Control
                            required
                            placeholder="Username"
                            onChange={(e) => setDisplayName(e.target.value)} type="text"
                           />
                    </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <FloatingLabel label="Email" className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            required
                            type="email"
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </FloatingLabel>
                    </Form.Group>
                    <FloatingLabel label="Password" className="mb-3" controlId="formBasicPassword">
                        <Form.Control
                            required
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FloatingLabel>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" type="Submit">
                            Sign up
                        </Button>
                    </div>
                </Form>

            <div className="p-4 box mt-3 text-center">
                Already have an account? {"  "}
                <Button variant='secondary' onClick={() => setHasAccount(true)}>Log In</Button>
            </div>
            </div>
        </>

    );
}

export default SignUpView;
