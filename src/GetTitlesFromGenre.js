import GenrePickerView from "./GenrePickerView.js";
import React, {useState} from 'react';
import {GENRE} from "./filmConsts.js";
import getTitleIdByGenre from "./getTitleIdByGenre"

export default function GetTitlesFromGenre(){
    const[genre, setGenre] = React.useState("")
    const[titles, setTitles] = React.useState("")
    function handleGenreChange(event){
        setGenre(event.target.value)
        console.log(event.target.value)
    }
    const filmIDs = getTitleIdByGenre(genre, 10)
    if(!genre) return <GenrePickerView setGenre={handleGenreChange} genres={GENRE}/>
    console.log("got here")
    if(filmIDs) console.log(filmIDs)



}
