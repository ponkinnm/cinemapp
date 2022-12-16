import React from 'react';
import {ListGroup, Overlay, Button} from 'react-bootstrap';

function QuoteBox(props) {
    function renderQuote(item, i){
        return <ListGroup.Item variant="dark" key={i}>{item}</ListGroup.Item>
    }
    return (
        <>
            <ListGroup>
                {props.movieToQuote.lines.map(renderQuote)}
            </ListGroup>
        </>
    );
}

export default QuoteBox;
    // ? `${props.movieToQuote.getListOfCharacters().join(', ').replace(/, ([^,]*)$/, ' and $1')}`
    /*{(props.isHintCharacter || props.isHintYear) ? (<b>Hint:</b>) : null}
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
    <div>{" "}</div>*/
