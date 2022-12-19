import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    set: 0,
    score: 0,
    totalScore:0,
    hints: -1, // is it necessary? TODO: reassess our score-logic
    correctAnswer: false,
    hasSubmittedAnswer :false,

    title: "",
    lines: [],
    characters:"",
    year: "",

    movieIds: [],
    movies: [],
    correctMovieId: "",
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        replaceListOfMovieIds: (state, action) => {
            state.movieIds = [...action.payload]
        },
        removeMovieId: (state, action) => {
            state.movieIds = state.movieIds.filter(itemId => itemId !== action.payload)
        },
        addMovie: (state, action) => {
            // check for duplicates? add several movies at once?
            state.movies = [...state.movies, action.payload]
        },
        replaceMovies: (state, action) => {
            state.movies = [...action.payload]
        },
        removeMovie: (state, action) => {
            const id = action.payload
            state.movies = state.movies.filter((item) => item.id !== id)
        },
        resetGame: (state) => {
            // state.movies = state.movies.filter((item) => item.id !== state.correctMovieId)
            state.hints = -1 // nextQuote increments hints
            state.score = 0
            state.correctAnswer = false
            state.hasSubmittedAnswer = false
            state.title = ""
            state.lines = []
            state.characters = ""
            state.year = ""

            // don't really want to reset this part.
            state.movies = []
            state.correctMovieId = ""
        },
        setCorrectMovieId : (state, action) => {
            state.correctMovieId = action.payload
            state.title = state.movies.find(movie => movie.id === action.payload).title
            // state.lines = state.movies.find(movie => movie.id === action.payload).lines
        },
        showCharacters: (state) => {
            state.characters = state.movies.find(movie => movie.id === state.correctMovieId)
                .characters
                .reduce((text, value, i, array) =>
                        text + (i < array.length - 1 ? ', ' : ' and ') + value)
            state.hints++
            // ? .join(', ').replace(/, ([^,]*)$/, ' and $1')}`
        },
        showYear: (state) => {
            state.year = state.movies.find(movie => movie.id === state.correctMovieId).year
            state.hints++
        },
        submitAnswer: (state,action) => {
            state.hasSubmittedAnswer = true
            state.lines = []
            state.set++;
            state.year = ""
            state.characters = ""

            if (state.correctMovieId === action.payload) {
                state.score += 10
                state.score -= state.hints
                state.totalScore += state.score
                state.correctAnswer = true
            } else {
                state.correctAnswer = false
                // state.totalScore -= state.hints //???
            }
        },
        nextQuote: (state) => {
            // TODO share these CBs with createMovieQuoteGenerator or replace them?
            // i.e. if alt 2 works fine, then createMovieQuoteGenerator can be replaced with a callback
            // that transforms fetched results to an object that is compatible for adding to state.movies

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

            if (movie) {
                const [quote, ...quotes] = movie.quotes
                const lines = quote.lines.reduce(linesArrayReducerCB, [])
                const characters = quote.lines.reduce(characterArrayReducerCB, [])
                Object.assign(movie, {quotes, lines, characters})
            }
            state.lines = movie.lines
            state.characters = ""
            state.hints++
        }
    },
})

export const gameSliceAction = gameSlice.actions
export default gameSlice.reducer
