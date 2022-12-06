/**
 * filename         ../src/movieSource.js
 * @fileoverview    TODO (to write)
 */
import {BASE_URL, API_KEY} from "./apiConfig";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': BASE_URL
    }
}

// async function fetchMovieQuotes(...args) {} // try todo one that can take an array of movieIds
/**
 * Return a customized quotes-object of chosen movie.
 *
 * @param titleId the movies titleID, e.g. tt9114286
 * @returns TODO {Promise<*>} Promise that resolves to an object containing the chosen movies id, title and quotes e.g.
 *                       id string e.g. "/title/tt9114286/"
 *                       title string e.g. "Scareface"
 *                       quotes array e.g.
 *
 */
async function fetchMovieQ(titleId = 'tt0068646') {
    const endpoint = "/title/get-quotes?tconst=" // hardcoded?

    // await response of the fetch call
    const response = await fetch(`https://${BASE_URL}${endpoint}${titleId}`, options)
    if (!response.ok) {throw new Error(`API error! status: ${response.status}`)}

    // only proceed once the first promise is resolved
    const data = await response.json()

    // only proceed once the second promise is resolved
    // return transformQuoteQueryResultACB(data);
    return data;
}
/**
 * Return an array of customized quotes-object of chosen movies.
 *
 * @param titleIds of each movie titleID, e.g. tt9114286, tt0068646
 * @returns TODO {Promise<*>} An array of promises that each resolves to an object
 *                       containing the chosen movies id, title and quotes e.g.
 *                       id string e.g. "/title/tt9114286/"
 *                       title string e.g. "Scareface"
 *                       quotes array e.g.
 *
 */
async function fetchAllMoviesQ(...titleIds) {
    try {
        const data = await Promise.All(
           titleIds.map(titleId => fetchMovieQ(titleId))
        )
        return data
    } catch (err) {
        console.log(err)
        throw (err)
    }
}

function myAPICall(endpoint, apiParams) {
    function treatHTTPResponseACB(response) {
        function throwExplanationACB(data) {
            throw new Error("API error" + response.status + " " + data);
        }
        return response.ok
            ? response.json()
            : response.text().then(throwExplanationACB)
    }

    return fetch(`https://${BASE_URL}${endpoint}${apiParams}`, options)
            .then(treatHTTPResponseACB);
}
// or just include the CB as an arrow function instead?
function treatErrorACB(err) {console.log(err)}
function transformQuoteQueryResultACB(obj){
    return {
        id: obj.base.id,
        title: obj.base.title,
        year: obj.base.year,
        quotes: obj.quotes,
    };
}
/**
 * Return a customized quotes-object of chosen movie.
 *
 * @param titleId the movies titleID, e.g. tt9114286
 * @returns {Promise<*>} Promise that resolves to an object containing the chosen movies id, title and quotes e.g. TODO
 *                       id string e.g. "/title/tt9114286/"
 *                       title string e.g. "Scareface"
 *                       quotes array e.g. TODO
 *
 */

function getMovieQuotes(titleId = 'tt0068646') {
    const endpoint = "/title/get-quotes?tconst="
    return (
        myAPICall(endpoint, titleId)
            .then(transformQuoteQueryResultACB)
            .catch(treatErrorACB)
    );
}

/**
 * Return array of title IDs of a chosen genre.
 *
 * @param chosenGenre genre, e.g. "horror"
 * @param noOfTitles how many titles to retrieve from API. Default: 100
 * @returns {Promise<*>} Promise that resolves to array of titleIDs, e.g. tt9114286
 */
function getArrayOfTitleIdsByGenre(chosenGenre = 'action', noOfTitles = 100) {
    const endpoint = '/title/v2/get-popular-movies-by-genre?'
    function isolateIdACB(titleAndId) {return titleAndId.split("/")[2]}
    const searchParams = {limit: noOfTitles, genre: chosenGenre,}

    return (
        myAPICall(endpoint, new URLSearchParams(searchParams))
            .then((arr => arr.map(isolateIdACB)))
            .catch(treatErrorACB)
    );
}

export {getMovieQuotes, getArrayOfTitleIdsByGenre, fetchMovieQ, fetchAllMoviesQ}