import React from 'react';
import './quotebox.css';

function Question(props) {

    function alternativeCB(movie) {
        return (<div key={movie.getId()}>
            <input type="radio"
                   id={movie.getId()}
                   value={movie.getId()}
                   name={"answer"}
                   key={movie.getId()}
                   onInput={() => {
                       console.log(movie)
                       props.onSelect(movie)
                   }}
            />
            <label htmlFor={movie.getId()}>{movie.getTitle()}</label>
        </div>);
    }
    function handleAnswerACB() {
        props.onSubmit()
    }
    function nextQuoteRequestACB() {props.onNext(props.movieToQuote)}
    function characterRequestACB() {props.onCharacter()}
    function yearRequestACB() {props.onYear()}

    return (
        <>
            {props.movieToQuote.getLines().split ('\n').map((item, i) => <p key={i}>{item}</p>)}
            {props.isHintCharacter
            ? props.movieToQuote.getCharacters().split ('\n').map((item, i) => <p key={i}>{item}</p>)
            : null}
            {props.isHintYear
                ? `${props.movieToQuote.getYear()}`
                : null}
            <form>
                <fieldset>
                    <legend>Which movie?</legend>
                    {props.movies.map(alternativeCB)}
                    <button onClick={handleAnswerACB} type={"submit"}>Submit</button>
                </fieldset>
            </form>
            <button onClick={nextQuoteRequestACB}>NextQuote</button>
            <button onClick={characterRequestACB}>Character hint</button>
            <button onClick={yearRequestACB}>Year hint</button>
            <div>
            {props.hasSubmittedAnswer
                ? props.isAnswerCorrect
                    ? "Congratulation!"
                    : "You Lose! Good Day Sir!"
                : null
            }
            </div>
        </>);
}

export default Question;