import React, {useState} from 'react';
import Login from "./Login";
import ingrid from "./img/bergman - intermezzo.jpg"

function Welcome(props) {

    const [hej, setHej] = useState("hallå");

    return (
        <div>
            <h1>Welcome to CinemApp</h1>

            <Login />
            <img src={ingrid}/>
        </div>
    );
}

export default Welcome;