import React from 'react';
import Question from "../pages/gameplay/Question";

function GamePresenter(props) {
    const [answer, setAnswer] = React.useState({})
    // const [result, setResult] = React.useState()

    const movies = [
            {id: 1, title: "Die Hard", quote: ""},
            {id: 2, title: "Scarface", quote: "Say hello to my little friend"},
            {id: 3, title: "Harry Potter and The Philosophers stone", quote: ""},
    ]

    const correctAnswerID = 2
    function checkAnswerACB(){return answer.id === correctAnswerID}
    function selectedAnswerACB(movie){setAnswer(movie)}

    function whichMovieACB(movie) {return movie.id === correctAnswerID}

    return (
        <div>
            <Question
                quote={movies.find(whichMovieACB).quote}
                onAnswer={checkAnswerACB}
                onSelect={selectedAnswerACB}
                movies={movies}
            />

        </div>
    );
}

export default GamePresenter;