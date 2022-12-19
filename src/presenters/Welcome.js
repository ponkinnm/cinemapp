import React from 'react';
import ingrid from "../img/bergman - intermezzo.jpg"
import AuthPresenter from "./AuthPresenter";
import {selectUser} from "../features/auth/authSlice";
import {useSelector} from "react-redux";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Spinner from 'react-bootstrap/Spinner';
import Stack from 'react-bootstrap/Stack';
import StartButton from "../StartButton";
import ShowHighScoreButton from "../ShowHighScoreButton";

function Welcome() {
    const user = useSelector(selectUser);

    return (
        <div className="page-welcome">
            <div className={"img-wrapper--circle img-md"}>
                <img alt={"ingrid bergman"} src={ingrid}/>
            </div>
            {!user && <AuthPresenter/>}
            {user &&
                <Stack gap={2} className="col-md-5-mx-auto">
                <ToastContainer className="p-3" position={"middle-center"}>
                    <Toast bg={'dark'} style={{color: 'antiquewhite'}}>
                    <Toast.Header closeButton={false}>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"/>
                        <strong className="me-auto">{' '} CinemApp</strong>
                    </Toast.Header>
                    <Toast.Body >Hello, {user.displayName}! <br/>Welcome to this game where you shall guess the movie
                        from different quotes. <br/>
                    </Toast.Body>
                        <StartButton/><br/>
                        <ShowHighScoreButton/>
                </Toast>

                </ToastContainer>
                </Stack>
                }
        </div>
    );
}

export default Welcome;
