import React from 'react';
import {connect} from "react-redux";
import Alert from 'react-bootstrap/Alert';
import {mapStateToCorrectResultProps} from "../../features/game/gameMap";

function CorrectResultBox(props) {
    return (
        <Alert variant ={'success'}>
            Congratulations! You scored {props.score} {props.score === 1 ? "point" : "points"} with
            {props.hints === 1 ? " just ": " "} {props.hints} {props.hints === 1 ? "hint": "hints" }.
            <div>
            Your total score is {props.currentScore}!
            </div>
        </Alert>
    );
}
export default connect(mapStateToCorrectResultProps)(CorrectResultBox)
