import React from 'react';

function QuoteBox(props) {

    return (
        <>
            {props.movieToQuote.getLines().split ('\n').map((item, i) => <p key={i}>{item}</p>)}
            {props.isHintCharacter
                ? `${props.movieToQuote.getArrayOfCharacters()
                    .reduce((text, value, i, array) => 
                        text + (i < array.length - 1 ? ', ' : ' and ') + value)}`
                : null}
            {/*{props.isHintCharacter*/}
            {/*    ? props.movieToQuote.getCharacters().split ('\n').map((item, i) => <p key={i}>{item}</p>)*/}
            {/*    : null}*/}
            {props.isHintYear
                ? `${props.movieToQuote.getYear()}`
                : null}
        </>
    );
}

export default QuoteBox;
    // ? `${props.movieToQuote.getListOfCharacters().join(', ').replace(/, ([^,]*)$/, ' and $1')}`
