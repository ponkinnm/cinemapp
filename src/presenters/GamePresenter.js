import React, {useCallback, useEffect, useState} from 'react';
import Question from "../pages/gameplay/Question";
import QuoteBox from "../pages/gameplay/QuoteBox";
import CorrectResultBox from "../pages/gameplay/CorrectResultBox";
import BadResultBox from "../pages/gameplay/BadResultBox";
import LoadingScreen from '../views/LoadingScreen'
import HintView from "../pages/gameplay/HintView"
import {useDispatch, useSelector} from "react-redux";
import {gameSliceAction} from "../features/game/gameSlice";
import {fetchAndAddMoviesToStore} from "../features/game/gameApiActions";
import {useNavigate} from "react-router-dom";

function GamePresenter() {
    const NUMBEROFMOVIES = 3

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate();

    const dispatch = useDispatch()

    const isAnswerCorrect = useSelector(state => state.game.correctAnswer)
    const hasSubmittedAnswer = useSelector(state => state.game.hasSubmittedAnswer)
    const movieIds = useSelector(state => state.game.movieIds)
    const totalScore = useSelector(state => state.game.totalScore)
    const newGame = (delay = 2000) => {setTimeout(gameSetUp, delay)}

    const gameSetUp = useCallback(async () => {
        setIsLoading(true)
        setError(null)
        dispatch(gameSliceAction.resetGame())
        try {
            await dispatch(fetchAndAddMoviesToStore(movieIds, NUMBEROFMOVIES))
        } catch (err){
            // console.error(err)
            setError(err.message)
            // newGame(200);
        }
        setIsLoading(false)
    }, [])

    useEffect(() =>{
        console.log("Effect running game set up ")
        setIsLoading(true)
        setError(null)
        gameSetUp();
        return () => {
            console.log("Effect clean up game set up")
        }
    }, [gameSetUp])

    function nextSetACB() {
        if (totalScore) {
            navigate('/highscore')
        } else {
            newGame()
        }
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
                : null}
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