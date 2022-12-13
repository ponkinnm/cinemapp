import React, {useState, useEffect} from 'react';
import Login from "./Login";
import SignupButton from "./SignupButton";
import ingrid from "./img/bergman - intermezzo.jpg"
import {useUserAuth} from "./context/UserAuthContext"
import GetTitlesFromGenre from './GetTitlesFromGenre'
import GamePresenter from "./presenters/GamePresenter";
function Welcome(props) {
    const {user} = useUserAuth();
    const [pickedGenre, setPickedGenre] = React.useState('')
    function setGenre(genre){
        //console.log(genre)
        setPickedGenre(genre)
        console.log(pickedGenre.toString())
    }
    useEffect(() => {console.log(pickedGenre)})
    return (
        <div style={{width: '50vw', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <div className={"img-wrapper--circle img-md"}>
                <img alt={"ingrid bergman"} src={ingrid}/>
            </div>
            <h1>Welcome to CinemApp</h1>
            <div>{!user && <Login />}</div>
            <div>{!user && <SignupButton />}</div>
            <div>{user && <GetTitlesFromGenre pickGenre={setGenre}/>}</div>
            <div>{user && pickedGenre && <GamePresenter genre={pickedGenre}/>}</div>
        </div>
    );
}

export default Welcome;
