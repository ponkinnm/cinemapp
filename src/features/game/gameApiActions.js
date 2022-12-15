import {gameActions} from "./gameSlice";
import {BASE_URL, API_KEY} from "./apiConfig";
import {TITLEIDS} from "../../filmConsts";
import {createMovieQuoteGenerator} from "../../utilities";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': BASE_URL
    }
}
export const fetchTitleIdsByGenre = (chosenGenre = 'action', noOfTitles = 100) => {
   return async (dispatch) => {
       const endpoint = '/title/v2/get-popular-movies-by-genre?'
       const fetchData = async () => {
           function isolateIdACB(titleAndId) {return titleAndId.split("/")[2]}
           const searchParams = {limit: noOfTitles, genre: chosenGenre,}
           // await response of the fetch call
           const response = await fetch(`https://${BASE_URL}${endpoint}${new URLSearchParams(searchParams)}`, options)
           if (!response.ok) {throw new Error(`API error! status: ${response.status}`)}

           // only proceed once the first promise is resolved
           const data = await response.json()

           // only proceed once the second promise is resolved
           return data.map(isolateIdACB);
       }
       try {
           // const movieData = await fetchData()
           const titleIdListByGenre = await [...TITLEIDS]
           dispatch(gameActions.replaceTitleIdList(titleIdListByGenre))
       } catch (error) {
           // Do something
       }
   }
}
export const fetchMovieQ = (titleId) => {
    function transformQuoteQueryResultACB(obj){
        // TODO: copy all from createMovieQuoteGenerator exempt for lines and characters
        return createMovieQuoteGenerator(obj)
    }

    return async (dispatch) => {
        const endpoint = "/title/get-quotes?tconst=" // hardcoded?
        const fetchData = async () => {

            // await response of the fetch call
            const response = await fetch(`https://${BASE_URL}${endpoint}${titleId}`, options)
            if (!response.ok) {throw new Error(`API error! status: ${response.status}`)}

            // only proceed once the first promise is resolved
            const data = await response.json()

            // only proceed once the second promise is resolved
            return transformQuoteQueryResultACB(data);

        }
        try {
            // const movieData = await fetchData(titleId)
            const movieData = await transformQuoteQueryResultACB(titleId) // if titleId is a const object e.g. QUOTE
            dispatch(
                gameActions.addMovie(movieData)
            )

        } catch (error) {

        }
    }
}