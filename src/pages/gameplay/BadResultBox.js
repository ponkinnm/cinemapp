import React from 'react';
import {connect} from "react-redux";

const mapStateToBadResultBoxProps = (state) => {
    return {
        movie:state.game.title
    }
}
function BadResultBox(props) {
    return (
        <div>
            You Lose! Good Day Sir!
            The right answer was {props.movie}.
        </div>
    );
}

export default connect(mapStateToBadResultBoxProps)(BadResultBox);
