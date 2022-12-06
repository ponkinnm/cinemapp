/**
 * filename         ../src/presenters/GamePresenter.js
 * @fileoverview    TODO (to write)
 */
import React, {useState} from 'react';
import Question from "../pages/gameplay/Question";
import {fetchAllMoviesQ, fetchMovieQ, getArrayOfTitleIdsByGenre} from "../movieSource";
import {createQuoteGeneratorStatic, createPlayer} from "../utilities";
import {QUOTE, QUOTE2, QUOTE3} from "../filmConsts";
import QuoteBox from "../pages/gameplay/QuoteBox";
import ResultBox from "../pages/gameplay/ResultBox";

function GamePresenter(props) {
    const [answerId, setAnswerId] = React.useState({})
    const [hasSubmittedAnswer, setHasSubmittedAnswer] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const [player, setPlayer] = React.useState(null)
    const [movies, setMovies] = React.useState([])
    const [movieQuoteGenerator, setMovieQuoteGenerator] = React.useState(null)

    const [correctMovieId, setCorrectMovieId] = React.useState("") // or just use movieQuoteGenerator.getId()
    const [showCharacter, setShowCharacter] = React.useState(false)
    const [showYear, setShowYear] = React.useState(false)
    const [isAnswerCorrect, setIsAnswerCorrect] = React.useState(false)

    const gameSetUp = React.useCallback(() => {
        // get player id and stuff from Firebase?
        setPlayer(createPlayer('x'))
    }, [])

    // const addMovieHandler = (movie) => {
    //     // setMovies(prevMovies => [...prevMovies, movie])
    //     setMovies(prevMovies => [...prevMovies, createQuoteGeneratorStatic(movie)])
    // }

    // const fetchMovieQuotesHandler = async () => {
    const fetchMovieQuotesHandler = React.useCallback( async () => {
        setIsLoading(true)
        setError(null)
        setAnswerId("")
        // debugger; // this function is called twice when reloaded.
        try {

            // await list = getArrayOfTitleIdsByGenre('action')
            // setMovieList(list)

            // const titleIds = player.getArrayOfRandomMovies(3) // magicnumber, hardcoded
            // await setMovies(fetchAllMoviesQ('tt0068646', 'tt0073195'))

            // const data = await fetchAllMoviesQ(...titleIds)
            const data = [QUOTE, QUOTE2, QUOTE3]
            setMovies(data)

            // Should pick one random from data
            const datum = await QUOTE3
            setMovieQuoteGenerator(createQuoteGeneratorStatic(datum))
            setCorrectMovieId(datum.id)

        } catch(err) {
            setError(err.message)
            console.error(err)
            debugger;
        }
        setIsLoading(false)
    }, [])
    // }

    React.useEffect(() =>{
        console.log("Effect running game set up ")
        gameSetUp();
        return () => {console.log("Effect clean up game set up")}
    }, [gameSetUp])

    React.useEffect(() => {
        console.log("Effect running  movieQuoteHandler")
        /*
         * fetch a list of Genre,
         * ask which genre the user wants to play with
         * fetch list of movies
         * choose three of them per game (random?)
         * fetch quoteObjects
         * create QuoteGenerators
         */
        fetchMovieQuotesHandler();
        return () => {console.log("Effect clean up movieQuoteHandler")}
    }, [fetchMovieQuotesHandler])

    function checkAnswerCB() {
        return answerId === correctMovieId // or just use movieQuoteGenerator.getId() instead of correctMovieId
    }
    function submitAnswerACB() {
        setHasSubmittedAnswer(true)
        setIsAnswerCorrect(checkAnswerCB())
    }
    function selectedAnswerACB(id) {
        setAnswerId(id)
    }
    function nextQuoteACB(){
        movieQuoteGenerator.popQuote()
        setMovieQuoteGenerator( {...movieQuoteGenerator})
        setShowCharacter(false)
        setShowYear(false)
    }
    function characterACB() {setShowCharacter(true)}
    function yearACB() {setShowYear(true)}

    //TODO add UseEffect and promiseNoData stuff and a view instead of hasSubmittedAnswer ternary operator below
    // TODO and/or use useContext? useReducer?
    return (
        <>
            {!isLoading && movieQuoteGenerator && (
                <div>
                <QuoteBox
                    movieToQuote = {movieQuoteGenerator}
                    isHintCharacter = {showCharacter}
                    isHintYear = {showYear}
                />
                <Question
                    onSubmit={submitAnswerACB}
                    onNext={nextQuoteACB}
                    onCharacter={characterACB}
                    onYear={yearACB}
                    onSelect={selectedAnswerACB}
                    movies={movies}
                    hasSelected={answerId}
                /></div>
                )
            }
            {hasSubmittedAnswer && (
                <ResultBox
                isAnswerCorrect = {isAnswerCorrect}
                playerDetails = {player}
                />
            )}
        </>
    );
}

export default GamePresenter;
