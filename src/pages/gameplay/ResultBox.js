import React from 'react';

function ResultBox(props) {
    const score = props.gameDetails.getScore()
    const hints = props.gameDetails.getHits()

    return (
        <div>
            {props.isAnswerCorrect
                ? `Congratulations! You scored ${score} points with ${hints} hints`
                : `You Lose! Good Day Sir!`
            }
        </div>
    );
}

export default ResultBox;
