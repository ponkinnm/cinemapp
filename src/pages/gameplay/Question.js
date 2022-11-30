import React, {useEffect, useState} from 'react';
import './quotebox.css';

function Question({quote, movies, onAnswer, onSelect}) {

    function alternativeCB(movie) {
        return (<div key={movie.id}>
            <input type="radio"
                   id={movie.id}
                   value={movie.id}
                   name={"answer"}
                   key={movie.id}
                   onInput={() => {
                       console.log(movie)
                       onSelect(movie)
                   }}
            />
            <label htmlFor={movie.id}>{movie.title}</label>
        </div>);
    }
    function handleAnswerACB() {
        console.log(onAnswer())
    }

    return (<div>
        {quote}
        <form>
            <fieldset>
                <legend>Which movie?</legend>
                {movies.map(alternativeCB)}
                <button onClick={handleAnswerACB} type={"submit"}>Submit</button>
            </fieldset>
        </form>
    </div>);
}

export default Question;