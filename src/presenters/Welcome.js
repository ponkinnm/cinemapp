import React  from 'react';
import ingrid from "../img/bergman - intermezzo.jpg"
import AuthPresenter from "./AuthPresenter";
import {selectUser} from "../features/auth/authSlice";
import {useSelector} from "react-redux";

function Welcome() {
    const user = useSelector(selectUser);

    return (
        <div className="page-welcome">
            <div className={"img-wrapper--circle img-md"}>
                <img alt={"ingrid bergman"} src={ingrid}/>
            </div>
            {!user && <AuthPresenter/>}
        </div>
    );
}

export default Welcome;
