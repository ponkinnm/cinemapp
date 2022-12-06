import React from 'react';

function ResultBox(props) {
    return (
        <div>
            {props.isAnswerCorrect
                ? "Congratulations!"
                : "You Lose! Good Day Sir!"
            }
        </div>
    );
}

export default ResultBox;
