import QuotePresenter from "./QuotePresenter"; // TODO: Move this file to pages
import GenrePickerView from "../views/GenrePickerView.js";
import React, {useState, useEffect} from 'react'
import {GENRE} from "../util/filmConsts.js";
import {useGetMovieIdsByGenreQuery} from "../features/api/apiSlice";
import {skipToken} from "@reduxjs/toolkit/query";
import {gameSliceAction, replaceMovieIds, replaceTitleIdList} from "../features/game/gameSlice";
import {useDispatch} from "react-redux";
import LoadingScreen from "../views/LoadingScreen";
import {fetchTitleIdsByGenre} from "../features/game/gameApiActions";
import GamePresenter from "./GamePresenter";

export default function GenrePresenter() {
    const LIMIT = 100
    const [myGenre, setMyGenre] = useState(skipToken)

    // alt 1
    function handleGenreChange(event) {
        setMyGenre({
            limit: LIMIT,
            genre: event.target.value
        })
    }

    const {
        isLoading,
        isFetching,
        isSuccess,
        isError,
        error,
    } = useGetMovieIdsByGenreQuery(myGenre)

    useEffect(() => {
            console.log("Effect running genre set up ")
            return () => {
                console.log("Effect clean up genre set up")
            }
        }, []
    )

    // TODO: create an error component?  Like LoadingScreen...
    return (
        <>
            {isError
                ? <div>{`Houston, we have a problem! Tell the newbies that the ${error.message.toString()}`}</div>
                : (isLoading || isFetching)
                    ? <LoadingScreen/>
                    : isSuccess
                        ? <GamePresenter/>
                        : <GenrePickerView
                            setGenre={handleGenreChange}
                            genres={GENRE}
                        />
            }
        </>
    );
}