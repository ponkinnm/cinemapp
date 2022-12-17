import React from 'react';
import {connect} from "react-redux";
import Alert from 'react-bootstrap/Alert';

const mapStateToProps = (state) => {
    return {
        score:state.game.score,
        totalScore:state.game.totalScore,
        hints:state.game.hints,
    }
}
function CorrectResultBox(props) {
    return (
        <Alert variant ={'success'}>
            Congratulations! You scored {props.score} {props.score === 1 ? "point" : "points"} with
            {props.hints === 1 ? " just ": " "} {props.hints} {props.hints === 1 ? "hint": "hints" }.
            <div>
            Your total score is {props.totalScore}!
            </div>
        </Alert>
    );
}

export default connect(mapStateToProps)(CorrectResultBox)
