import QuotePresenter from "./QuotePresenter"; // TODO: Move this file to pages
import GenrePickerView from "../views/GenrePickerView.js";
import React, {useState, useEffect} from 'react'
import {GENRE} from "../util/filmConsts.js";
import {useGetMovieIdsByGenreQuery} from "../features/api/apiSlice";
import {skipToken} from "@reduxjs/toolkit/query";
import {gameSliceAction} from "../features/game/gameSlice";
import {useDispatch} from "react-redux";
import LoadingScreen from "../views/LoadingScreen";
// import {fetchTitleIdsByGenre} from "../features/game/gameApiActions";
import GamePresenter from "./GamePresenter";

let isInitial = true
export default function GenrePresenter() {
    const LIMIT = 100
    const [myGenre, setMyGenre] = useState(skipToken)
    const dispatch = useDispatch()

    // alt 1
    function handleGenreChange(selectedGenre) {
        setMyGenre({
            limit: LIMIT,
            genre: selectedGenre,
        })
    }

    const {
        data,
        isLoading,
        isFetching,
        isSuccess,
        isError,
        error,
    } = useGetMovieIdsByGenreQuery(myGenre)

    useEffect(() => {
        console.log("Effect running genre set up ")
        return () => {console.log("Effect clean up genre set up")}
        }, []
    )
    if (data && isInitial) {
        // TODO: fixed the problem with suboptimal solution (isInitial). Is there a better solution?
        debugger
        dispatch(gameSliceAction.replaceListOfMovieIds(data))
        isInitial = false
    }

    // TODO: create an error component?  Like LoadingScreen...
    return (
        <>
            {isError
                ? <div>{`Houston, we have a problem! Tell the newbies that the ${error.message.toString()}`}</div>
                : (isLoading || isFetching)
                    ? <LoadingScreen/>
                    : data && isSuccess
                        ? <GamePresenter/>
                        : <GenrePickerView
                            setGenre={handleGenreChange}
                            genres={GENRE}
                        />
            }
        </>
    );
}