import GenrePickerView from "./GenrePickerView.js";
import React, {useState} from 'react';
import {GENRE} from "./filmConsts.js";

export default function GenrePickerPresenter(){
    const[genre, setGenre] = React.useState("")
    function handleGenreChange(event){
        setGenre(event.target.value)
        console.log(event.target.value)
    }
    return <GenrePickerView setGenre={handleGenreChange} genres={GENRE}/>
}
