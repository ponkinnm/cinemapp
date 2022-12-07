import React from 'react';
import {Link} from "react-router-dom";
export default function SignupButton(){
    return <div>
        <Link to="signup">
        <button>Register new user</button>
        </Link>
    </div>
}
