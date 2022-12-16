import QuotePresenter from "./QuotePresenter"; // TODO: Move this file to pages
import GenrePickerView from "../views/GenrePickerView.js";
import React, {useState, useEffect} from 'react'
import {GENRE} from "../util/filmConsts.js";
import {useGetMovieIdsByGenreQuery} from "../features/api/apiSlice";
import {skipToken} from "@reduxjs/toolkit/query";
import {gameSliceAction, replaceMovieIds, replaceTitleIdList} from "../features/game/gameSlice";
import {useDispatch} from "react-redux";
import LoadingScreen from "../LoadingScreen";

export default function GenrePresenter(){
    const LIMIT = 100
    const [myGenre, setMyGenre] = useState(skipToken)
    const dispatch = useDispatch()
    // let content

    // alt 1
    function handleGenreChange(event){
        setMyGenre({
            limit:LIMIT,
            genre: event.target.value
        })
    }
    // alt 2
    // function handleGenreChange(selectedGenre){
    //     setGenre(selectedGenre)
    // }
    const {
        data,
        isLoading,
        isFetching,
        isSuccess,
        isError,
        error,
        } = useGetMovieIdsByGenreQuery(myGenre)
        // } =useGetMovieIdsByGenreQuery({limit:LIMIT, genre})

    useEffect(() => {
        console.log("Effect running genre set up ")
        if (data) {
            dispatch(gameSliceAction.replaceListOfMovieIds(data))
        }
        return () => {console.log("Effect clean up genre set up")}
        }, [data]
    )

    return (
        <>
            {myGenre === skipToken && <GenrePickerView
                onGenre={handleGenreChange}
                genres={GENRE}
            />}
            {isLoading && <LoadingScreen/>}
            {error && <div>{`Houston, we have a problem! Tell the newbies that the ${error.message.toString()}`}</div>}
            {isSuccess && <QuotePresenter/>}
        </>
    );
}