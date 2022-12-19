// TODO delete
// /**
//  * filename         ../src/presenters/QuotePresenter.js
//  * @fileoverview    TODO (to write)
//  */
//
// import React, {useCallback, useEffect, useState} from 'react'
// import Question from "../pages/gameplay/Question";
// import QuoteBox from "../pages/gameplay/QuoteBox";
// import LoadingScreen from '../views/LoadingScreen' // TODO should component/file be moved to /pages/gameplay/ ??
// // import {CorrectResultBox, BadResultBox} from "../pages/gameplay/ResultBox"; // TODO Shouldn't it be one file per component?
// import {useDispatch, useSelector} from "react-redux";
// import {useGetMovieQuery} from "../features/api/apiSlice";
// import {skipToken} from "@reduxjs/toolkit/query";
// import {addMoviesToStore, fetchAndAddMoviesToStore} from "../features/game/gameApiActions";
// import {gameSliceAction} from "../features/game/gameSlice";
//
// const QuotePresenter = () => {
//     const [isLoading, setIsLoading] = React.useState(false)
//     const [error, setError] = React.useState(null)
//
//     // replace answerId and hasSubmittedAnswer to one. I.e. no submit button?
//     const [answerId, setAnswerId] = useState({})
//     const [hasSubmittedAnswer, setHasSubmittedAnswer] = useState(false)
//
//     // could this be replaced somehow?
//     const [showCharacter, setShowCharacter] = useState(false)
//     const [showYear, setShowYear] = useState(false)
//     const [isAnswerCorrect, setIsAnswerCorrect] = useState(false)
//     const movieIds = useSelector(state => state.game.movieIds)
//     const movieOptions = useSelector(state => state.game.movies)
//     const correctMovieId = useSelector(state => state.game.correctMovieId)
//     const lines = useSelector(state => state.game.lines)
//     const characters = useSelector(state => state.game.characters)
//     const score = useSelector(state => state.game.score)
//     const hints = useSelector(state => state.game.hints)
//     debugger
//
//
//     const dispatch = useDispatch();
//
//     const gameSetUp = useCallback(async () => {
//         setIsLoading(true)
//         setError(null)
//         setHasSubmittedAnswer(false)
//         debugger
//         dispatch(fetchAndAddMoviesToStore(movieIds, 3))
//         debugger
//         setIsLoading(false)
//
//     }, [dispatch])
//
//     useEffect(() => {
//         console.log("Effect running game set up ")
//         gameSetUp()
//         return () => {console.log("Effect clean up game set up")}
//         }, []
//     )
//
//     function checkAnswerCB() {return answerId === correctMovieId} // or just use movieQuoteGenerator.getId() instead of correctMovieId
//     function selectedAnswerACB(id) {
//         setAnswerId(id)
//     }
//     function nextQuoteACB(){
//         // dispatch(gameSliceAction.addHints())
//         dispatch(gameSliceAction.nextQuote())
//         setShowCharacter(false)
//     }
//     function characterACB() {
//         // dispatch(gameSliceAction.addHints())
//         setShowCharacter(true)
//     }
//     function yearACB() {
//         // dispatch(gameSliceAction.addHints())
//         setShowYear(true)
//     }
//
//     function submitAnswerACB() {
//         setHasSubmittedAnswer(true)
//         setIsAnswerCorrect(checkAnswerCB())
//         if (checkAnswerCB()) {
//             // dispatch(gameSliceAction.addPoints(10))
//         }
//         // game.resetHintTracker()
//         setShowCharacter(false)
//         setShowYear(false)
//         newGame()
//     }
//     function newGame(delay = 5000) {
//         setTimeout(gameSetUp, delay)
//     }
//     return (
//         <>
//             {error && (`Houston, we have a problem! Tell the newbies that the ${error}`)}
//             {isLoading && <LoadingScreen/>}
//             {movieIds && (
//                 <div>
//                     <QuoteBox
//                         movieToQuote = {{lines, characters}}
//                         isHintCharacter = {showCharacter}
//                         isHintYear = {showYear}
//                     />
//                     <Question
//                         onSubmit={submitAnswerACB}
//                         onNext={nextQuoteACB}
//                         onCharacter={characterACB}
//                         onYear={yearACB}
//                         onSelect={selectedAnswerACB}
//                         movies={movieOptions}
//                         hasSelected={answerId}
//                         hasHintedYear={showYear}
//                         hasHintedCharacter={showCharacter}
//                     /></div>
//             )
//             }
//             {/*{hasSubmittedAnswer && isAnswerCorrect &&(*/}
//             {/*//     <CorrectResultBox*/}
//             {/*//         isAnswerCorrect = {isAnswerCorrect}*/}
//             {/*//         score={score}*/}
//             {/*//         hints={hints}*/}
//             {/*//     />*/}
//             {/*// )}*/}
//             {/*// {hasSubmittedAnswer && !isAnswerCorrect &&(*/}
//             {/*//     <BadResultBox*/}
//             {/*//         isAnswerCorrect = {isAnswerCorrect}*/}
//             {/*//         movie={movieOptions.find(({id}) => id === correctMovieId).title}*/}
//             {/*//     />*/}
//             {/*// )}*/}
//         </>
//
//     )
// }
//
// export default QuotePresenter;