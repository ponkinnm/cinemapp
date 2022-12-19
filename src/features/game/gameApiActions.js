import {gameSliceAction} from "./gameSlice";
import {BASE_URL, API_KEY} from "../../apiConfig";
import {createMovieObjFromApiResult, createMovieQuoteGenerator} from "../../util/utilities";
import {useSelector} from "react-redux";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': BASE_URL
    }
}
/**
 * Adds set number of movie objects to store from API that are
 * randomly picked from the set list of movie ids. It also randomly picks one of them as correct answer.
 * @param listOfMovieIds
 * @param numberOfMovies
 * @returns {(function(*): Promise<void>)|*}
 */
export const fetchAndAddMoviesToStore = (listOfMovieIds, numberOfMovies) => {
    const movieIds = [...listOfMovieIds]
    const successfulIds = []
    const failedIds = []

    const transformQuoteQueryResultACB = (obj) => {
        // TODO: copy all from createMovieObjFromApiResult exempt for lines and characters
        // return createMovieQuoteGenerator(obj)
        return createMovieObjFromApiResult(obj)
    }

    const pickUniqueRandomMovieId = () => {
        if (movieIds.length === 0) {throw new Error(`Empty movie list`)}
        const getRandomTitleId = () => movieIds[Math.floor(Math.random() * movieIds.length)]

        const randomTitleId = getRandomTitleId()

        if (successfulIds.some(id => randomTitleId === id)) {pickUniqueRandomMovieId()}
        if (failedIds.some(id => randomTitleId === id)) {pickUniqueRandomMovieId()}

        return randomTitleId
    }

    return async (dispatch) => {
        const endpoint = "/title/get-quotes?tconst=" // hardcoded?
        const fetchData = async (id) => {
            const titleId = id.split("/")[2]
            // await response of the fetch call
            const response = await fetch(`https://${BASE_URL}${endpoint}${titleId}`, options)
            if (!response.ok) {
                failedIds.push(id)
                dispatch(gameSliceAction.removeMovieId(id))
                throw new Error(`API error! status: ${response.status}`)
            }

            // only proceed once the first promise is resolved
            const data = await response.json()

            // only proceed once the second promise is resolved
            return transformQuoteQueryResultACB(data);
        }
        while (successfulIds.length < numberOfMovies) {
            try {
                const movieId = pickUniqueRandomMovieId()
                const movieData = await fetchData(movieId)
                dispatch(gameSliceAction.addMovie(movieData))
                dispatch(gameSliceAction.removeMovieId(movieId))
                successfulIds.push(movieId)
                if (successfulIds.length === numberOfMovies) {
                    const correctMovieId = successfulIds[Math.floor(Math.random()*successfulIds.length)]
                    dispatch(gameSliceAction.setCorrectMovieId(correctMovieId))
                    dispatch(gameSliceAction.nextQuote())
                }
            } catch (error) {
                // console.log(error.message.toString())
                continue
            }
        }
        // const randomIndex = Math.floor(Math.random() * successfulIds.length)
    }
}

// export const fetchTitleIdsByGenre = (chosenGenre = 'action', noOfTitles = 100) => {
//    return async (dispatch) => {
//        const endpoint = '/title/v2/get-popular-movies-by-genre?'
//        const fetchData = async () => {
//            const searchParams = {limit: noOfTitles, genre: chosenGenre,}
//            // await response of the fetch call
//            const response = await fetch(`https://${BASE_URL}${endpoint}${new URLSearchParams(searchParams)}`, options)
//            if (!response.ok) {throw new Error(`API error! status: ${response.status}`)}
//
//            // only proceed once the first promise is resolved
//            const data = await response.json()
//
//            // only proceed once the second promise is resolved
//            return data
//        }
//        try {
//            const movieData = await fetchData()
//            dispatch(gameSliceAction.replaceListOfMovieIds(movieData))
//        } catch (error) {
//            // Do something
//        }
//    }
// }
// const mapStateToProps = (state) => {
//     return {
//         lines: state.game.lines,
//         characters: state.game.characters,
//
//     }
// }