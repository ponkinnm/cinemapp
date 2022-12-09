import React from 'react';

function CorrectResultBox(props) {
    return (
        <div>
            Congratulations! You scored {props.score} points with {props.hints} hints
        </div>
    );
}

export default CorrectResultBox;
