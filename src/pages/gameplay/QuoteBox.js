import React from 'react';
import {ListGroup, Overlay, Button} from 'react-bootstrap';
import {connect} from "react-redux";
import "./quotebox.css"
// TODO What should go where and how? HintView or QuoteBox?

const mapStateToProps = (state) => {
    return {
        characters:state.game.characters,
        lines:state.game.lines,
        year:state.game.year,
    }
}
function QuoteBox(props) {
    function renderQuote(item, i){
        return <ListGroup.Item variant="dark" key={i}>{item}</ListGroup.Item>
    }
    return (
        <>
            <ListGroup>
                <div className={"quotes"}>{props.lines.map(renderQuote)}</div>
            </ListGroup>
            {(props.characters || props.year) ? (<b>Hint:</b>) : null}
            <p>
            {props.characters
            ? `- We quoted ${props.characters}.`
            : null}
            </p>
            <p>
            {props.year
                ? `- The movie was made ${props.year}.`
                : null}
            </p>
            <div>{" "}</div>
        </>
    );
}

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
export default connect(mapStateToProps)(QuoteBox)
