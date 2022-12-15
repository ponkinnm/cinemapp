/**
 * filename         ../src/presenters/QuotePresenter.js
 * @fileoverview    TODO (to write)
 */

import React, {useState} from 'react'
import Question from "../pages/gameplay/Question";
import QuoteBox from "../pages/gameplay/QuoteBox";
import LoadingScreen from '../LoadingScreen' // TODO should component/file be moved to /pages/gameplay/ ??
import {CorrectResultBox, BadResultBox} from "../pages/gameplay/ResultBox"; // TODO Shouldn't it be one file per component?
import {QUOTE, QUOTE2, QUOTE3, GENRE} from "../filmConsts";
import {useDispatch} from "react-redux";

const QuotePresenter = () => {
    // replace answerId and hasSubmittedAnswer to one. I.e. no submit button?
    const [answerId, setAnswerId] = useState({})
    const [hasSubmittedAnswer, setHasSubmittedAnswer] = useState(false)

    // replace with RTK
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    // could this be replaced somehow?
    const [showCharacter, setShowCharacter] = useState(false)
    const [showYear, setShowYear] = useState(false)
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false)

    const dispatch = useDispatch();
    // dispatch()
}

export default QuotePresenter;
