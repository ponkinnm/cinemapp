import React from 'react';
import {connect} from "react-redux";
import Alert from 'react-bootstrap/Alert';

const mapStateToProps = (state) => {
    return {
        score:state.game.score,
        hints:state.game.hints,
    }
}
function CorrectResultBox(props) {
    return (
        <Alert variant ={'success'}>
            Congratulations! You scored {props.score} points with {props.hints} hints
        </Alert>
    );
}

export default connect(mapStateToProps)(CorrectResultBox)
