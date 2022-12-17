import React from 'react';
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        score:state.game.score,
        hints:state.game.hints,
    }
}
function CorrectResultBox(props) {
    return (
        <div>
            Congratulations! You scored {props.score} points with {props.hints} hints
        </div>
    );
}

export default connect(mapStateToProps)(CorrectResultBox)
