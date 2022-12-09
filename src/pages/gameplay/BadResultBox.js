import React from 'react';

function BadResultBox(props) {
    return (
        <div>
            You Lose! Good Day Sir!
            The right answer was {props.movie}.
        </div>
    );
}

export default BadResultBox;
