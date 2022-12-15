import React from 'react';
import './quotebox.css';

function Question(props) {

    function alternativeCB(movie) {
try{
    const  id = movie.id
    const title = movie.base.title
    // const {url:imageUrl} = movie.base.image

    return (<div key={id}>
        <input type="radio"
               id={id}
               value={id}
               name={"answer"}
               key={id}
               default={props.hasSelected}
               onInput={() => {props.onSelect(id)}}
        />
        {/*<label type="radio">*/}
        {/*    <img alt={title} className="radioPic" width={250} src={imageUrl} /></label>*/}
        <label htmlFor={id}>{title}</label>
        {/*<img src={imageUrl} alt={title} />*/}
    </div>);}
catch(err){
    console.error()
}    }
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
            <button onClick={nextQuoteRequestACB}>I just need another quote!</button>
            <button onClick={characterRequestACB} disabled={props.hasHintedCharacter}>Who said what?</button>
            <button onClick={yearRequestACB} disabled={props.hasHintedYear}>Just give me the Year!</button>
        </>);
}

export default React.memo(Question);
