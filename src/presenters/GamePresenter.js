import React from 'react';
import Question from "../pages/gameplay/Question";
import GetQuote from "../GetQuote";
import {QUOTE} from "../filmConsts";

function GamePresenter(props) {
    const [answer, setAnswer] = React.useState({})
    // const [result, setResult] = React.useState()

    const movies = [
            {id: 1, title: "Die Hard", quote: ""},
            {QUOTE},
            {id: 3, title: "Harry Potter and The Philosophers stone", quote: ""},
    ]

    const correctAnswerID = QUOTE.id
    function checkAnswerACB(){return answer.id === correctAnswerID}
    function selectedAnswerACB(movie){setAnswer(movie)}

    function whichMovieACB(movie) {return movie.id === correctAnswerID}

    // Här är du. Fixa quotelinenen.
    return (
        <div>
            <Question
                quote={"TEST HELLO WORLD"/*movies.find(whichMovieACB).quotes[]*/}
                onAnswer={checkAnswerACB}
                onSelect={selectedAnswerACB}
                movies={movies}
            />

        </div>
    );
}

export default GamePresenter;