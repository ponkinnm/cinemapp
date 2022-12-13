import React from 'react';
import {Link} from "react-router-dom";
import {Alert, Button, Form} from "react-bootstrap";
export default function SignupButton(){
    return <div>
        <Link to="signup">
        <button>Register new user</button>
        </Link>
    </div>
}
