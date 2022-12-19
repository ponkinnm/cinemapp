import {gameSliceAction} from "./gameSlice";
import {BASE_URL, API_KEY} from "../../apiConfig";

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
        const id = obj.id
        const title = obj.base.title
        const year = obj.base.year
        const imageUrl = obj.base.image.url
        const quotes = obj.quotes

        return {
            id,
            title,
            year,
            imageUrl,
            quotes,
        };
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
    }
}