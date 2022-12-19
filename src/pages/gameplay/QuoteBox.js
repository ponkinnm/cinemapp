import React from 'react';
import {ListGroup} from 'react-bootstrap';
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
            {(props.characters || props.year)
                ? <Alert variant ={'warning'}><b>Darn! I forgot to tell you that every hint and quote cost you a point.
                    You've {props.hints !== 1 && "now "} lost  {props.hints} {props.hints === 1 ? "point" : "points"}.</b></Alert>
                : null }
            {props.characters
                ? <Alert variant ={'info'}>{ `We quoted ${props.characters}.`}</Alert>
            : null}
            {props.year
                ? <Alert variant ={'info'}>{`The movie was made ${props.year}.`}</Alert>
                : null}
            <div>{" "}</div>
        </>
    );
}
export default connect(mapStateToQuoteBoxProps)(QuoteBox)