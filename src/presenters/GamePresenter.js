/**
 * filename         ../src/presenters/GamePresenter.js
 * @fileoverview    TODO (to write)
 */
import React, {useState} from 'react';
import Question from "../pages/gameplay/Question";
import {createMovieQuoteGenerator, createMovieObjFromApiResult} from "../util/utilities";
import {QUOTE, QUOTE2, QUOTE3} from "../util/filmConsts";
import QuoteBox from "../pages/gameplay/QuoteBox";
import CorrectResultBox from "../pages/gameplay/CorrectResultBox";
import BadResultBox from "../pages/gameplay/BadResultBox";
import LoadingScreen from '../views/LoadingScreen'
import HintView from "../pages/gameplay/HintView"
import {useDispatch, useSelector} from "react-redux";
import {gameSliceAction} from "../features/game/gameSlice";

function GamePresenter() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const dispatch = useDispatch()

    const isAnswerCorrect = useSelector(state => state.game.correctAnswer)
    const hasSubmittedAnswer  = useSelector(state => state.game.hasSubmittedAnswer)

    const newGame = (delay = 5000) => {setTimeout(gameSetUp, delay)}

    const gameSetUp = React.useCallback(async () => {
        setIsLoading(true)
        setError(null)
        dispatch(gameSliceAction.resetGame())
        try {
            const movieData = [QUOTE, QUOTE2, QUOTE3].map(createMovieQuoteGenerator)
            dispatch(gameSliceAction.replaceMovies(movieData))

            // Randomly pick the movie to quote
            const quoteMovie = movieData[Math.floor(Math.random() * movieData.length)]

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

    function nextSetACB() {
        newGame()
    }

    // TODO Error should have its own view! Prio: NICE TO HAVE
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