import QuotePresenter from "./QuotePresenter"; // TODO: Move this file to pages
import GenrePickerView from "../views/GenrePickerView.js";
import React, {useState, useEffect} from 'react'
import {GENRE} from "../util/filmConsts.js";
import {useDispatch} from "react-redux";
import {fetchTitleIdsByGenre} from "../features/game/gameApiActions";

export default function GenrePresenter(){
    const [genre, setGenre] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {console.log(genre)})
    function handleGenreChange(event){
        setGenre(event.target.value)
        fetchTitleIdsByGenre() // TODO: Add selected genre
    }
    // function handleGenreChange(selectedGenre){
    //     setGenre(selectedGenre)
    //     fetchTitleIdsByGenre(selectedGenre) // TODO: Add selected genre
    // }
    //return {!genre && <GetTitlesFromGenre chooseGenre={(genre) => {setGenre(genre)}}}
    return (
        <>
            {!genre && <GenrePickerView setGenre={handleGenreChange} genres={GENRE}/>}
            {genre && <QuotePresenter genre={genre}/>}
        </>
    );
}
