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
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const dispatch = useDispatch()
    const isAnswerCorrect = useSelector(state => state.game.correctAnswer)
    const hasSubmittedAnswer  = useSelector(state => state.game.hasSubmittedAnswer)

    // to replace
    const [game, setGame] = React.useState(null)

    // are these necessary ?
    const movieOptions = useSelector(state => state.game.movies)


    const gameSetUp = React.useCallback(async () => {

        setIsLoading(true)
        setError(null)
        setAnswerId("")
        dispatch(gameSliceAction.resetGame())

        // To replace
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


    function selectedAnswerACB(id) {setAnswerId(id)}
    function nextSetACB(id) {
        setGame({...game})
        newGame()
    }
    function newGame(delay = 5000) {
        setTimeout(gameSetUp, delay)
    }

    return (
        <>
            {error && (`Houston, we have a problem! Tell the newbies that the ${error}`)}
            {isLoading && <LoadingScreen/>}
            <div>&nbsp;</div>
            {hasSubmittedAnswer
                ? isAnswerCorrect
                    ? <CorrectResultBox/>
                    : <BadResultBox/>
                : null }
            {!isLoading && (
                <div>
                <QuoteBox/>
                <Question
                    onNextSet={nextSetACB}
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
