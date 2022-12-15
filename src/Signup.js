
// https://blog.openreplay.com/authentication-in-react-18-using-firebase-v9/
import React, { useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Alert, Button, Form} from "react-bootstrap";
import {useUserAuth} from "./context/UserAuthContext";
import {database} from './firebaseConfig'
import {ref, get, set} from "firebase/database";
import {auth} from './firebaseConfig'
import FloatingLabel from "react-bootstrap/FloatingLabel";

// have a handler function that checks if the username is already taken
// and then deletes the currentUser and shows a error message indicating
// username already taken, maybe have one that checks this when typing the
// username in realtime
function Signup() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const {signUp, updateDisplayName, deleteCurrentUser} = useUserAuth();
    let navigate = useNavigate();
    function checkIfUsernameAlreadyTaken(name) {
        const dbRef = (ref(database, 'users'));
        get(dbRef)
            .then(response => {
                if(response.hasChildren()){
                    response.forEach((child) => {
                        const user = child.val()
                        console.log(user);
                        if(user.username === name){
                            //ta bort skapad authentication
                            deleteCurrentUser(auth.currentUser);
                            throw Error("Username already taken")
                        }
                        else {
                            writeUserToDatabase(displayName, email)
                        }
                    })
                }
                //checker
                console.log(response);
            } )
            .catch(err => {
                console.log(err.message)
            })
    }
    function writeUserToDatabase(displayName, email){
        set(ref(database, 'users/' + auth.currentUser.uid  ), {
            username: displayName,
            uid: auth.currentUser.uid,
            email: email,
            highScore: 0
        }).catch(err => console.log(err.message))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password);
            updateDisplayName(displayName)
            await checkIfUsernameAlreadyTaken(displayName, setError)
            navigate("/");
        } catch (err) {
            if(err.message.includes("email")){
                setError("Email already in use");
            }
            else if(err.message.includes("weak-password")){
                setError("Password should be at least 6 characters")
            }
            else if(err.message.includes("Username")) {
                setError(err.message);
                console.log(err.message)
            }
        }
    };

    return (
        <>
            <div className="p-4 box">
                <h2 className="mb-3">Signup to CinemApp</h2>

                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit}>
                    <FloatingLabel label="Username" className="mb-3">
                        <Form.Control
                            placeholder="Username"
                            onChange={(e) => setDisplayName(e.target.value)}
                            type="text" id="displayName"
                        />
                    </FloatingLabel>
                    <FloatingLabel label="Email" className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </FloatingLabel>

                    <FloatingLabel label="Password" className="mb-3" controlId="formBasicPassword">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FloatingLabel>

                    <div className="d-grid gap-2">
                        <Button variant="primary" type="Submit">
                            Sign up
                        </Button>
                    </div>
                </Form>

            <div className="p-4 box mt-3 text-center">
                Already have an account? <Link to="/">Log In</Link>
            </div>
            </div>
        </>
    );
}

export default Signup;
