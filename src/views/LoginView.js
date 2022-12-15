import React, {useState} from 'react';
import {Alert, Button, Form} from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function LoginView({handleSubmit, error}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div className="p-4 box">
            <h2 className="mb-3 justify-content-center d-flex">Login</h2>

            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(email, password)
            }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel label="Email" className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        placeholder="Enter email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    /></FloatingLabel>
                </Form.Group>
                <FloatingLabel label="Password" className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        placeholder="Enter password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    /></FloatingLabel>
                <div className="d-grid gap-2">
                    <Button variant="primary" type="Submit">Login</Button>
                </div>
            </Form>
        </div>
    );
}

export default LoginView;
