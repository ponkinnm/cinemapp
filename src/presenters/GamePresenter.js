/**
 * filename         ../src/presenters/GamePresenter.js
 * @fileoverview    TODO (to write)
 */
import React, {useState} from 'react';
import Question from "../pages/gameplay/Question";
import {fetchAllMoviesQ, fetchArrayOfTitleIdsByGenre} from "../util/movieSource";
import {createMovieQuoteGenerator, createGame, createMovieObjFromApiResult} from "../util/utilities";
import {QUOTE, QUOTE2, QUOTE3} from "../util/filmConsts";
import QuoteBox from "../pages/gameplay/QuoteBox";
import CorrectResultBox from "../pages/gameplay/CorrectResultBox";
import BadResultBox from "../pages/gameplay/BadResultBox";
import LoadingScreen from '../views/LoadingScreen'
import HintView from "../pages/gameplay/HintView"
import {connect, useDispatch, useSelector} from "react-redux";
import {gameSliceAction} from "../features/game/gameSlice";

function GamePresenter() {
    const [answerId, setAnswerId] = React.useState({})
    const [hasSubmittedAnswer, setHasSubmittedAnswer] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const [game, setGame] = React.useState(null)

    const [showCharacter, setShowCharacter] = React.useState(false)
    const [showYear, setShowYear] = React.useState(false)
    const [isAnswerCorrect, setIsAnswerCorrect] = React.useState(false)

    const dispatch = useDispatch()
    const correctMovieId = useSelector(state => state.game.correctMovieId)
    const movieOptions = useSelector(state => state.game.movies)

    const gameSetUp = React.useCallback(async () => {

        setIsLoading(true)
        setError(null)
        setAnswerId("")
        setHasSubmittedAnswer(false)

        // get player id and stuff from Firebase?
        const firstGame = createGame()

        try {
            const movieData = [QUOTE, QUOTE2, QUOTE3].map(createMovieQuoteGenerator)
            dispatch(gameSliceAction.replaceMovies(movieData))

            // Randomly pick the movie to quote
            const quoteMovie = movieData[Math.floor(Math.random() * movieData.length)]

            setGame({...firstGame})
            dispatch(gameSliceAction.setCorrectMovieId(quoteMovie.id))
        } catch (err){
            console.error(err)
            setError(err.message)
            newGame(200);
        }
        setIsLoading(false)
    }, [])

    React.useEffect(() =>{
        console.log("Effect running game set up ")
        setIsLoading(true)
        setError(null)

        gameSetUp();
        return () => {console.log("Effect clean up game set up")}
    }, [gameSetUp])


    function checkAnswerCB(id) {return id === correctMovieId} // or just use movieQuoteGenerator.getId() instead of correctMovieId
    function selectedAnswerACB(id) {setAnswerId(id)}
    function submitAnswerACB(id) {
        setAnswerId(id);
        console.log(id);
        console.log(correctMovieId);
        setHasSubmittedAnswer(true)
        setIsAnswerCorrect(checkAnswerCB(id))
        console.log(isAnswerCorrect)
        if (checkAnswerCB(id)) {
            game.addPoints(10)
        }
        setHasSubmittedAnswer(true)
        setIsAnswerCorrect(checkAnswerCB())
        dispatch(gameSliceAction.submitAnswer(answerId))
        // game.resetHintTracker()
        setGame({...game})
        newGame()
    }
    function newGame(delay = 5000) {
        setTimeout(gameSetUp, delay)
    }

    // movieToQuote = {{lines, characters} = movieOptions.find((movie) => movie.id === correctMovieId) }


    return (
        <>
            {error && (`Houston, we have a problem! Tell the newbies that the ${error}`)}
            {isLoading && <LoadingScreen/>}
            <div>&nbsp;</div>
            {hasSubmittedAnswer && isAnswerCorrect && <CorrectResultBox/>}
            {hasSubmittedAnswer && !isAnswerCorrect && <BadResultBox/>}
            {!isLoading && movieOptions && (
                <div>
                <QuoteBox
                    movieToQuote = {movieOptions.find(movie => movie.id === correctMovieId)}
                />
                <Question
                    onSubmit={submitAnswerACB}
                    onSelect={selectedAnswerACB}
                    hasSelected={answerId}
                    hasSubmittedAnswer={hasSubmittedAnswer}
                />
                <div>&nbsp;</div>
                    <HintView/>
                </div>
                )
            }
        </>
    );
}

export default GamePresenter;
// <HintView
//     movieToQuote = {movieQuoteGenerator}
//     isHintCharacter = {showCharacter}
//     isHintYear = {showYear}
//     setHintCharacter={characterACB}
//     setHintYear={yearACB}
