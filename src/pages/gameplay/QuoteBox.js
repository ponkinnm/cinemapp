import React from 'react';
import {ListGroup, Overlay, Button} from 'react-bootstrap';
import {connect} from "react-redux";
import "./quotebox.css"
import {mapStateToQuoteBoxProps} from "../../features/game/gameMap";
// TODO What should go where and how? HintView or QuoteBox?

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
export default connect(mapStateToQuoteBoxProps)(QuoteBox)
