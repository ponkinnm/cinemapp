/**
 * filename         ../src/GamePresenter.js
 * @fileoverview    TODO (to write)
 */
import React, {useState} from 'react';
import Question from "../pages/gameplay/Question";
import GetQuote from "../GetQuote";
import {QUOTE} from "../filmConsts";
import resolvePromise from "../resolvePromise";

function GamePresenter(props) {
    const [answer, setAnswer] = React.useState({})
    const [hasSubmitedAnswer, setHasSubmitedAnswer] = React.useState(false)
    const [movie, setMovie] = React.useState({})
    // const [result, setResult] = React.useState()
    React.useEffect(() => {console.log(checkAnswerCB())}, [hasSubmitedAnswer])

    const movies = [
            {id: 1, title: "Die Hard", quote: ""},
            {QUOTE},
            {id: 3, title: "Harry Potter and The Philosophers stone", quote: ""},
    ]

    const correctAnswerID = QUOTE.id
    function checkAnswerCB() {return answer.id === correctAnswerID}
    function submitAnswerACB() {setHasSubmitedAnswer(current => !current)}
    function selectedAnswerACB(movie) {setAnswer(movie)}

    function whichMovieACB(movie) {return movie.id === correctAnswerID}

    return (
        <div>
            <Question
                quote={"TEST HELLO WORLD"/*movies.find(whichMovieACB).quotes[]*/}
                onAnswer={submitAnswerACB}
                onSelect={selectedAnswerACB}
                movies={movies}
            />
            {hasSubmitedAnswer
                ? checkAnswerCB()
                    ? "Congratulation!"
                    : "You Lose! Good Day Sir!"
                : null}
        </div>
    );
}

export default GamePresenter;