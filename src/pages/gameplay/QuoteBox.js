import React from 'react';
import {ListGroup, Overlay, Button} from 'react-bootstrap';
import {connect} from "react-redux";
import "./quotebox.css"
import {mapStateToQuoteBoxProps} from "../../features/game/gameMap";
import Alert from 'react-bootstrap/Alert'
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
            <div>{" "}</div>
            {/*{(props.characters || props.year)*/}
            {/*    ? <Alert variant ={'info'}><b>The Hint cost you {props.hints} points: </b></Alert>*/}
            {/*    : null }*/}
            <p>
            {props.characters
                ? <Alert variant ={'info'}>{ `We quoted ${props.characters}.`}</Alert>
            : null}
            </p>
            <p>
            {props.year
                ? <Alert variant ={'info'}>{`The movie was made ${props.year}.`}</Alert>
                : null}
            </p>
            <div>{" "}</div>
        </>
    );
}
export default connect(mapStateToQuoteBoxProps)(QuoteBox)
