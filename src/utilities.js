/**
 * filename         ../src/utilities.js
 * @fileoverview    TODO (to write)
 */

function createPlayer(playerId = '123', nick = "playerNameUnknown", ...movies) {
    const id = playerId
    const nickName = nick
    let movieList = [...movies]
    let score = 0
    function arrayOfMoviesCB(nbr= 3) {
        let arrayOfMovies = []

        while (arrayOfMovies.length < nbr && movieList.length > nbr) {
            const randomIndex = Math.floor(Math.random() * movieList.length)
            const movie = movieList[randomIndex]
            if (arrayOfMovies.some(movie)) {
                arrayOfMovies = [...arrayOfMovies, movie]
            }
        }
        return arrayOfMovies
    }
    return {
        "getScore" : () => score,
        "getName": () => nickName,
        "getId": () => id,
        "getArrayOfRandomMovies" : (nbr) => {return arrayOfMoviesCB(nbr)},
        "addPoints": (points) => {score += points},
        "addToMovieList": (...movies) => {movieList = [...movieList, ...movies]},
    }
}

/**
 * Closure function capturing the chosen json movie object
 *
 * @param movie json object
 * @returns an object of functions
 * TODO  Create an array of characters instead of a string. Should the character list contain images?
 * TODO  Add an image?
 * TODO  Add trivia?
 */
function createQuoteGeneratorStatic(movie) {
    const id = movie.id
    const title = movie.base.title
    const year = movie.base.year
    const quotes = [...movie.quotes]
    let quote = quotes.pop()

    // or an array of characters (where we check fo duplicates)
    function characterListCB(accumulator, object) {
        const isInArrayCB = character => character === object.characters[0].character
        return (object.characters && !accumulator.some(isInArrayCB))
            ? [...accumulator, object.characters[0].character]
            : [...accumulator]
    }
    function onlyCharactersReducerCB(accumulator, object) {
        if (object.characters) return accumulator + " " + object.characters[0].character + "\n"
        else return accumulator + ""
    }
    function onlyLinesReducerCB(accumulator, object){
        if (object.text) return accumulator + "- " + object.text + "\n"
        else return accumulator + ""
    }
    return {
        "popQuote": () => {quote = {...quotes.pop()}},
        "getId": () => id,
        "getTitle": () => title,
        "getYear": () => year,
        "getNumberOfQuotes": () => quotes.length,
        "getLines": () => quote.lines.reduce(onlyLinesReducerCB, ""),
        "getCharacters": () => quote.lines.reduce(onlyCharactersReducerCB, ""),
        "getArrayOfCharacters": () => quote.lines.reduce(characterListCB, []),
    };
}

export {createQuoteGeneratorStatic, createPlayer};
