/**
 * filename         ../src/presenters/GamePresenter.js
 * @fileoverview    TODO (to write)
 */
import React, {useState} from 'react';
import Question from "../pages/gameplay/Question";
import {fetchMovieQuotes} from "../movieSource";
import {createQuoteGeneratorStatic} from "../utilities";
import {QUOTE, QUOTE2, QUOTE3} from "../filmConsts";

function GamePresenter(props) {
    const [answer, setAnswer] = React.useState({})
    const [hasSubmittedAnswer, setHasSubmittedAnswer] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)

    // switch these three movies to an array of objects instead
    const [movie1, setMovie1] = React.useState(null)
    const [movie2, setMovie2] = React.useState(null)
    const [movie3, setMovie3] = React.useState(null)

    const [correctMovieId, setCorrectMovieId] = React.useState("")
    const [showCharacter, setShowCharacter] = React.useState(false)
    const [showYear, setShowYear] = React.useState(false)
    const [isAnswerCorrect, setIsAnswerCorrect] = React.useState(false)

    // const fetchMovieQuotesHandler = async () => {
    const fetchMovieQuotesHandler = React.useCallback( async () => {
            setIsLoading(true)
            try {
                if (!movie1 || !movie2 || !movie3) {
                    /*
                    let moviePromises = [
                        fetchMovieQuotes('tt0068646'),
                        fetchMovieQuotes('tt0073195'),
                        fetchMovieQuotes('tt0073195'),
                    ]
                    Promise.all(moviePromises).then(movies => {
                        // do something
                    })
                     */

                    /*
                    const data = await fetchMovieQuotes('tt0068646')
                    const data = await fetchMovieQuotes('tt0073195')
                     */

                    // switch to a parallel fetch instead
                    const data = await QUOTE
                    const data2 = await QUOTE2
                    const data3 = await QUOTE3

                    setMovie1(createQuoteGeneratorStatic(data))
                    setMovie2(createQuoteGeneratorStatic(data2))
                    setMovie3(createQuoteGeneratorStatic(data3))

                    setCorrectMovieId(data2.id)
                }
                // else {
                // //     debugger;
                // }
            } catch(err) {
                console.log(err)
                debugger;
            }
            setIsLoading(false)
        debugger;
        }, [])
    // }

    React.useEffect(() => {
        console.log("Effect running ")
        fetchMovieQuotesHandler()
        return () => {console.log("Effect clean up")}
    // }, [fetchMovieQuotesHandler])
    }, [])

    function checkAnswerCB() {
        console.log(answer.getId() === correctMovieId)
        return answer.getId() === correctMovieId
        debugger
    }
    function submitAnswerACB() {
        setHasSubmittedAnswer(true)
        setIsAnswerCorrect(checkAnswerCB())
    }
    function selectedAnswerACB(movie) {
        setAnswer(movie)
    }
    function nextQuoteACB(nextQuote){
        nextQuote.popQuote()
        setMovie2( {...nextQuote})
        setShowCharacter(false)
        setShowYear(false)
    }
    function characterACB() {setShowCharacter(true)}
    function yearACB() {setShowYear(true)}
    // function whichMovieACB(movie) {return movie.id === correctMovieId}

    //TODO add UseEffect and promiseNoData stuff and a view instead of hasSubmittedAnswer ternary operator below
    // TODO and/or use useContext? useReducer?
    return (
        <>
            {!isLoading && movie1 && (
                <div>
                <Question
                    movieToQuote = {movie2}
                    isHintCharacter = {showCharacter}
                    isHintYear = {showYear}
                    isAnswerCorrect = {isAnswerCorrect}
                    hasSubmittedAnswer = {hasSubmittedAnswer}
                    onSubmit={submitAnswerACB}
                    onNext={nextQuoteACB}
                    onCharacter={characterACB}
                    onYear={yearACB}
                    onSelect={selectedAnswerACB}
                    movies={[movie1, movie2, movie3]}
                />
        </div>)}
        </>
    );
}

export default GamePresenter;