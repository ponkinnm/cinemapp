import GenrePickerView from "./GenrePickerView.js";
import React, {useState} from 'react';
import {GENRE} from "./filmConsts.js";
import getTitleIdByGenre from "./getTitleIdByGenre"

export default function GetTitlesFromGenre(props){
    const[genre, setGenre] = React.useState("")
    function handleGenreChange(event){
        setGenre(event.target.value)
        //console.log(event.target.value)
        props.pickGenre(event.target.value)
    }
    const filmIDs = getTitleIdByGenre(genre)
    if(!genre) return <GenrePickerView setGenre={handleGenreChange} genres={GENRE}/>



}
