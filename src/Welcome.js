import React, {useState} from 'react';
import Login from "./Login";
import ingrid from "./img/bergman - intermezzo.jpg"

function Welcome(props) {

    return (
        <div style={{width: '50vw', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <div className={"img-wrapper--circle img-md"}>
                <img alt={"ingrid bergman"} src={ingrid}/>
            </div>
            <h1>Welcome to CinemApp</h1>
            <input type="text" placeholder="Username"/>
            <input type={"text"} placeholder={"Password"}/>
            <Login />
        </div>
    );
}

export default Welcome;