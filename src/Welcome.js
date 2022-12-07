import React, {useState} from 'react';
import Login from "./Login";
import SignupButton from "./SignupButton";
import ingrid from "./img/bergman - intermezzo.jpg"

function Welcome(props) {

    return (
        <div style={{width: '50vw', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <div className={"img-wrapper--circle img-md"}>
                <img alt={"ingrid bergman"} src={ingrid}/>
            </div>
            <h1>Welcome to CinemApp</h1>
            <Login />
            <SignupButton />
        </div>
    );
}

export default Welcome;
