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
function myAPICall(endpoint, apiParams) {
    function treatHTTPResponseACB(response) {
        function throwExplanationACB(data) {
            throw new Error("API error" + response.status + " " + data);
        }
        if (!response.ok) {return response.text().then(throwExplanationACB);}
        return response.json();
    }

    return (
        fetch(BASE_URL + endpoint + apiParams, options)
            .then(treatHTTPResponseACB)
    );
}
function treatErrorACB(err) {console.log(err)}
function transformQuoteQueryResultACB(obj){
    return {
        id: obj.id,
        title: obj.title,
        quotes: obj.quotes,
    };
}
/**
 * Return a customized quotes-object of chosen movie.
 *
 * @param titleId the movies titleID, e.g. tt9114286
 * @returns {Promise<*>} Promise that resolves to an object containing the chosen movies id, title and quotes e.g. TODO
 */
function getMovieQuotes(titleId = 'tt0068646') {
    const endpoint = "/title/get-quotes?tconst="
    return (
        myAPICall(endpoint, titleId).then(transformQuoteQueryResultACB).catch(treatErrorACB)
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
        .then((arr => arr.map(isolateIdACB))).catch(treatErrorACB)
    );
}

export {getMovieQuotes, getArrayOfTitleIdsByGenre}