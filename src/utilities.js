/**
 * filename         ../src/utilities.js
 * @fileoverview    TODO (to write)
 */

// import {QUOTE} from "./filmConsts";

function createQuoteGeneratorDynamic() {
    let id = ""
    let title = ""
    let year = ""
    let quotes = []
    let quote = {} // empty if no quotes have been poped yet, undefined if the quotes array is empty

    function onlyCharactersReducerCB(accumulator, object) {
        if (object.characters) return accumulator + " " + object.characters[0].character + "<br>"
        else return accumulator + ""
    }
    function onlyLinesReducerCB(accumulator, object){
        if (object.text) return accumulator + "- " + object.text + "\n\n"
        else return accumulator + ""
    }

    return {
        "addMovie": (movie) => {
            id = movie.id
            title = movie.base.title // base when testing.
            year = movie.base.year // base when testing
            quotes = [...movie.quotes]
            quote = quotes.pop()
        },
        "popQuote": () => {quote = quotes.pop},
        "getId": () => id,
        "getTitle": () => title,
        "getYear": () => year,
        "getNumberOfQuotes": () => quotes.length,
        "getLines": () => quote.lines.reduce(onlyLinesReducerCB, ""),
        "getCharacters": () => quote.lines.reduce(onlyCharactersReducerCB, ""),
    };
}
function createQuoteGeneratorStatic(movie) {
    const id = movie.id
    const title = movie.base.title
    const year = movie.base.year
    const quotes = [...movie.quotes]
    let quote = quotes.pop() // empty if no quotes have been poped yet, undefined if the quotes array is empty

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
        "getLines": () => quote.lines.reduce(onlyLinesReducerCB, ""), // array of lines with charachters attached. How to solve?
        "getCharacters": () => quote.lines.reduce(onlyCharactersReducerCB, ""),
    };
}
// const testMovie = QUOTE

export {createQuoteGeneratorStatic, createQuoteGeneratorDynamic};
