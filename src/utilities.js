/**
 * filename         ../src/utilities.js
 * @fileoverview    TODO (to write)
 * TODO: createPlayer
 */

function createGame(gameId= '1'){
    const id = gameId
    let movieList = []
    let score = 0
    let hints = 0

    function arrayOfMoviesCB(nbr= 3) {
        let arrayOfTitleIds = []
        if (movieList.length === 0) {
            throw new Error(`Empty movie list`)
        }

        while (arrayOfTitleIds.length < nbr && movieList.length > nbr) {
            const randomIndex = Math.floor(Math.random() * movieList.length)
            const randomTitleId = movieList[randomIndex]
            if (!arrayOfTitleIds.some(titleId => randomTitleId === titleId)) {
                arrayOfTitleIds = [...arrayOfTitleIds, randomTitleId]
            }
        }
        return arrayOfTitleIds
    }

    return {
        "getScore" : () => score,
        "getHints" : () => hints,
        "getId": () => id,
        "getArrayOfRandomMovies" : (nbr = 3) => {return arrayOfMoviesCB(nbr)},
        "addPoints": (points) => {score += points - hints},
        "addToMovieList": (...movies) => {
            if (movies.length === 0) {
                throw new Error(`Argument passed no movie title Ids`)
            }
            movieList = [...movieList, ...movies]
        },
        "addHints" : ()=> hints += 1,
        "resetHintTracker":()=> hints = 0,
    }
}


/**
 * Create new object with quotes
 *
 * @param fetched movie quote json object or previously created movie quote object
 * @returns movie object with new quote
 * TODO  Create an array of characters instead of a string. Should the character list contain images?
 * TODO  Add an image?
 * TODO  Add trivia?
 */
function createMovieQuoteGenerator(obj) {
// TODO share these CBs with nextQuote (redux action) or replace them? (see below)
// i.e. if alt 2 in nextQuote works fine, then createMovieQuoteGenerator can be replaced with a callback
// that transforms fetched results to an object that is compatible for adding to state.movies.
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
    const id = obj.id
    const title = obj.title || obj.base.title
    const year = obj.year || obj.base.year
    const imageUrl = obj.imageUrl || obj.base.image.url

    // const title = obj.base === undefined ? obj.title : obj.base.title
    // const year = obj.base === undefined ? obj.year : obj.base.year
    // const imageUrl} = obj.base === undefined ? obj.imageUrl : obj.base.image.url

    const [quote, ...quotes] = obj.quotes
    const characters = quote.lines.reduce(characterArrayReducerCB, [])
    const lines = quote.lines.reduce(linesArrayReducerCB, [])

    return {
        id,
        title,
        year,
        imageUrl,
        lines,
        characters,
        quotes,
    };
}

// function createQuoteGeneratorStatic(movie) {
//     const id = movie.id || movie.getId()
//     const title = movie.title || movie.getTitle()
//     const year = movie.year || movie.getYear()
//     // const image = movie.image || movie.getImage()
//     const {url:imageUrl} = movie.image || movie.getImage()
//     const [quote, ...quotes] = movie.quotes || movie.getQuotes()
//
//     // or an array of characters (where we check fo duplicates)
//     function characterListCB(accumulator, object) {
//         const isInArrayCB = character => character === object.characters[0].character
//         return (object.characters && !accumulator.some(isInArrayCB))
//             ? [...accumulator, object.characters[0].character]
//             : [...accumulator]
//     }
//     function onlyCharactersReducerCB(accumulator, object) {
//         if (object.characters) return accumulator + " " + object.characters[0].character + "\n"
//         else return accumulator + ""
//     }
//     function onlyLinesReducerCB(accumulator, object){
//         if (object.text) return accumulator + "- " + object.text + "\n"
//         else return accumulator + ""
//     }
//     return {
//         // "popQuote": () => {quote = {...quotes.pop()}},
//         "getId": () => id,
//         "getTitle": () => title,
//         "getYear": () => year,
//         "getNumberOfQuotes": () => quotes.length,
//         "getLines": () => quote.lines.reduce(onlyLinesReducerCB, ""),
//         "getCharacters": () => quote.lines.reduce(onlyCharactersReducerCB, ""),
//         "getArrayOfCharacters": () => quote.lines.reduce(characterListCB, []),
//         "getImage": () => image,
//         "getImageUrl": () => image.url,
//         "getQuotes": () => quotes,
//     };
// }

export {createGame, createMovieQuoteGenerator};
// export {createQuoteGeneratorStatic, createGame};
