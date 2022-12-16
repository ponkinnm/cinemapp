import GamePresenter from './GamePresenter'
import GenrePickerView from "../views/GenrePickerView.js";
import React, {useState, useEffect} from 'react'
import {GENRE} from "../util/filmConsts.js";

export default function QuizPresenter(){
    const [genre, setGenre] = useState(null)
    function handleGenreChange(event){
        console.log(event.target.value)
        setGenre(event.target.value)
    }
    //return {!genre && <GetTitlesFromGenre chooseGenre={(genre) => {setGenre(genre)}}}
    return (<>
        {!genre && <GenrePickerView setGenre={handleGenreChange} genres={GENRE}/>}
        {genre && <GamePresenter genre={genre}/>}</>);
}
