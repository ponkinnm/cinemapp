import {API_KEY, BASE_URL} from "./apiConfig";

/**
 * Return array of title IDs of a chosen genre.
 *
 * @param chosenGenre genre, e.g. "horror"
 * @param noOfTitles how many titles to retrieve from API. Default: 100
 * @returns {Promise<*>} Promise that resolves to array of titleIDs, e.g. tt9114286
 */

export default function getTitleIdByGenre(chosenGenre='action', noOfTitles=100) {

    const endpoint = '/title/v2/get-popular-movies-by-genre?';
    const options = {
        method: 'GET', headers: {'X-RapidAPI-Key': API_KEY, 'X-RapidAPI-Host': BASE_URL}
    };

    function isolateIdCB(titleAndId) {
        return titleAndId.split("/")[2];
    }

    const searchParams = {
        limit: noOfTitles, genre: chosenGenre,
    }

    try {
        return fetch('https://imdb8.p.rapidapi.com' + endpoint + new URLSearchParams(searchParams), options)
            .then((res) => res.json())
            .then((arr => arr.map(isolateIdCB)));
    } catch (err) {
        console.error(err);
    }
}
