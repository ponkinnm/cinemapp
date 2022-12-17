import GamePresenter from './GamePresenter'
import GenrePickerView from "../views/GenrePickerView.js";
import React, {useState, useEffect} from 'react'
import {GENRE, TITLEIDS} from "../util/filmConsts.js";
import {useDispatch} from "react-redux";
import {gameSliceAction} from "../features/game/gameSlice";

export default function QuizPresenter(){
    const [genre, setGenre] = useState(null)
    const dispatch = useDispatch()
    useEffect(() => {console.log(genre)})
    function handleGenreChange(event){
        console.log(event.target.value)
        setGenre(event.target.value)
        dispatch(gameSliceAction.replaceListOfMovieIds(TITLEIDS))
    }
    //return {!genre && <GetTitlesFromGenre chooseGenre={(genre) => {setGenre(genre)}}}
    return (<>
        {!genre && <GenrePickerView setGenre={handleGenreChange} genres={GENRE}/>}
        {genre && <GamePresenter/>}</>);
}
