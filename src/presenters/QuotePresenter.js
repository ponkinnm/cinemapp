/**
 * filename         ../src/presenters/QuotePresenter.js
 * @fileoverview    TODO (to write)
 */

import React, {useCallback, useEffect, useState} from 'react'
import Question from "../pages/gameplay/Question";
import QuoteBox from "../pages/gameplay/QuoteBox";
import LoadingScreen from '../views/LoadingScreen' // TODO should component/file be moved to /pages/gameplay/ ??
import {CorrectResultBox, BadResultBox} from "../pages/gameplay/ResultBox"; // TODO Shouldn't it be one file per component?
import {useDispatch, useSelector} from "react-redux";

const QuotePresenter = () => {
    // replace answerId and hasSubmittedAnswer to one. I.e. no submit button?
    const [answerId, setAnswerId] = useState({})
    const [hasSubmittedAnswer, setHasSubmittedAnswer] = useState(false)

    // could this be replaced somehow?
    const [showCharacter, setShowCharacter] = useState(false)
    const [showYear, setShowYear] = useState(false)
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false)
    const movieIds = useSelector(state => state.game.movieIds)

    const dispatch = useDispatch();
    let content

    useEffect(() => {
        console.log("Effect running game set up ")

        return () => {console.log("Effect clean up game set up")}
        }, []
    )
}

export default QuotePresenter;