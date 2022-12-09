import React from 'react';

function CorrectResultBox(props) {
    return (
        <div>
            Congratulations! You scored {props.score} points with {props.hints} hints
        </div>
    );
}

function BadResultBox(props) {
    return (
        <div>
            You Lose! Good Day Sir!
            The right answer was {props.movie}.
        </div>
    );
}

export {CorrectResultBox, BadResultBox};
