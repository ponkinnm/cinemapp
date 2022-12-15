import React  from 'react';
import ingrid from "./img/bergman - intermezzo.jpg"
import AuthPresenter from "./presenters/AuthPresenter";
import {selectUser} from "./features/auth/authSlice";
import {useSelector} from "react-redux";

function Welcome() {
    const user = useSelector(selectUser);

    return (
        <div style={{width: '50vw', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <div className={"img-wrapper--circle img-md"}>
                <img alt={"ingrid bergman"} src={ingrid}/>
            </div>
            <h1>Welcome to CinemApp</h1>
            {!user && <AuthPresenter/>}
        </div>
    );
}

export default Welcome;
