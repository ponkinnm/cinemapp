import React from 'react';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
export default function SignupButton(){
    return <div>
        <Link to="signup">
        <Button variant="primary">Register new user</Button>
        </Link>
    </div>
}
