import React from 'react';

function QuoteBox(props) {

    return (
        <>
            <b>The Quote:</b>
            {props.movieToQuote.lines.map((item, i) => <p key={i}>{item}</p>)}
            {(props.isHintCharacter || props.isHintYear) ? (<b>Hint:</b>) : null}
            <p>
            {props.isHintCharacter
            ? `- We quoted ${props.movieToQuote.characters
                .reduce((text, value, i, array) => 
                    text + (i < array.length - 1 ? ', ' : ' and ') + value)}.`
            : null}
            </p>
            <p>
            {props.isHintYear
                ? `- The movie was made ${props.movieToQuote.year}.`
                : null}
            </p>
        </>
    );
}

export default QuoteBox;
    // ? `${props.movieToQuote.getListOfCharacters().join(', ').replace(/, ([^,]*)$/, ' and $1')}`
