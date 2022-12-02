import React from 'react';
import './quotebox.css';

function Question({isHintYear, isHintCharacter, movieQuotes, movies, onAnswer, onSelect, onNext, onCharacter, onYear}) {

    function alternativeCB(movie) {
        return (<div key={movie.getId()}>
            <input type="radio"
                   id={movie.getId()}
                   value={movie.getId()}
                   name={"answer"}
                   key={movie.getId()}
                   onInput={() => {
                       console.log(movie)
                       onSelect(movie)
                   }}
            />
            <label htmlFor={movie.getId()}>{movie.getTitle()}</label>
        </div>);
    }
    function handleAnswerACB() {
        console.log(onAnswer())
    }
    function nextQuoteRequestACB() {onNext(movieQuotes)}
    function characterRequestACB() {onCharacter()}
    function yearRequeastACB() {onYear()}

    return (
        <>
            {movieQuotes.getLines().split ('\n').map((item, i) => <p key={i}>{item}</p>)}
            {isHintCharacter
            ? movieQuotes.getCharacters().split ('\n').map((item, i) => <p key={i}>{item}</p>)
            : null}
            {isHintYear
                ? `${movieQuotes.getYear()}`
                : null}
            <form>
                <fieldset>
                    <legend>Which movie?</legend>
                    {movies.map(alternativeCB)}
                    <button onClick={handleAnswerACB} type={"submit"}>Submit</button>
                </fieldset>
            </form>
            <button onClick={nextQuoteRequestACB}>NextQuote</button>
            <button onClick={characterRequestACB}>Character hint</button>
            <button onClick={yearRequeastACB}>Year hint</button>
        </>);
}

export default Question;