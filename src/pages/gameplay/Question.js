import React from 'react';
import './quotebox.css';

function Question(props) {

    function alternativeCB(movie) {
        // const id = movie.getId()
        // const title = movie.getTitle()
        const  id = movie.id
        const title = movie.base.title

        return (<div key={id}>
            <input type="radio"
                   id={id}
                   value={id}
                   name={"answer"}
                   key={id}
                   onInput={() => {props.onSelect(id)}}
            />
            <label htmlFor={id}>{title}</label>
        </div>);
    }
    function handleAnswerACB() {
        props.onSubmit()
    }
    // function nextQuoteRequestACB() {props.onNext(props.movieToQuote)}
    function nextQuoteRequestACB() {props.onNext()}
    function characterRequestACB() {props.onCharacter()}
    function yearRequestACB() {props.onYear()}

    return (
        <>
            <form>
                <fieldset>
                    <legend>Which movie?</legend>
                    {props.movies.map(alternativeCB)}
                </fieldset>
            </form>
            <button onClick={handleAnswerACB} type={"submit"} disabled={props.hasSelected === ""}>Submit</button>
            <button onClick={nextQuoteRequestACB}>NextQuote</button>
            <button onClick={characterRequestACB}>Character hint</button>
            <button onClick={yearRequestACB}>Year hint</button>
        </>);
}

export default React.memo(Question);