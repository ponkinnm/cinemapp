import { createSlice } from '@reduxjs/toolkit';
import {createMovieQuoteGenerator} from "../../util/utilities";

const initialState = {
    // userId: '',
    // displayName: '',
    // email:"", // ?

    set: 0,
    score: 0,
    hints: 0, // is it necessary? TODO: reassess our score-logic

    movieIds: [],
    movies: [],
    correctMovieId: "",
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        // setPlayer: (state, action) => {
        //     state.userId = action.payload.uid
        //     state.displayName = action.payload.displayName
        //     state.email = action.payload.email
        // },
        addPoints: (state, action) => {
            state.set++;
            state.score++; // TODO set logic later
        },
        addHints: (state) => {
            state.hints++
        },
        addMovieIds: (state, action) => {
            action.payload.forEach((movieId) => {
                if (!state.movieIds.some((id) => id === movieId)) {
                    state.movieIds= [...state.movieIds, movieId]
                }
            })
        },
        replaceListOfMovieIds: (state, action) => {
            state.movieIds= [...action.payload]
        },
        removeMovieIds: (state, action) => {
            action.payload.forEach((movieId) => {
                state.movieIds= state.movieIds.filter((itemId) => itemId !== movieId);
            })
        },
        addMovie: (state, action) => {
            // check for duplicates? add several movies at once?
            state.movies = [...state.movies, action.payload]
        },
        removeMovie: (state, action) => {
            const id = action.payload
            state.movies = state.movies.filter((item) => item.id !== id)

            // remove several movies at once?
            // action.payload.forEach((id) => {
            //     state.movies = state.movies.filter((movie) => movie.id !== id)
            // })
        },
        setCorrectMovieId : (state, action) => {
            state.correctMovieId = action.payload
        },
        nextQuote: (state) => {
            // TODO share these CBs with createMovieQuoteGenerator or replace them?
            // i.e. if alt 2 works fine, then createMovieQuoteGenerator can be replaced with a callback
            // that transforms fetched results to an object that is compatible for adding to state.movies

            // TODO Open issue = add/assign quotesLeft to object?

            const characterArrayReducerCB = (accumulator, object) => {
                const isInArrayCB = character => character === object.characters[0].character
                return (object.characters && !accumulator.some(isInArrayCB))
                    ? [...accumulator, object.characters[0].character]
                    : [...accumulator]
            }
            const linesArrayReducerCB = (accumulator, object)  => {
                return object.text
                    ? [...accumulator, "- " + object.text]
                    : [...accumulator]
            }
            const id = state.correctMovieId
            // const id = action.payload
            const movie = state.movies.find((item) => item.id === id)

            // alt. 1
            if (movie) {
                // state.movies = state.movies.filter((item) => item.id !== id)
                state.movies = [...state.movies.filter((item) => item.id !== id),
                    createMovieQuoteGenerator(movie)]
            }
            // } else {
            //     throw new Error ("Oh no!")
            // }

            // alt. 2
            if (movie) {
                const [quote, ...quotes] = movie.quotes
                const lines = quote.lines.reduce(linesArrayReducerCB, [])
                const characters = quote.lines.reduce(characterArrayReducerCB, [])
                Object.assign(movie, {quotes, lines, characters})
            }
        }
    },
})

export const gameSliceAction = gameSlice.actions
export default gameSlice.reducer
