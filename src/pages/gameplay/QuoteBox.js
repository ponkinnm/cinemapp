import React from 'react';
import {connect} from "react-redux";
import "./quotebox.css"
import {mapStateToQuoteBoxProps} from "../../features/game/gameMap";
import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card'
// TODO What should go where and how? HintView or QuoteBox?

function QuoteBox(props) {
    function renderQuote(item, i){
        // return <ListGroup.Item variant="dark" key={i}>{item}</ListGroup.Item>
        return <blockquote className="blockquote mb-0" key={i}>{' '}{item}{' '}</blockquote>
    }

    return (
        <>
            <Card>
                <Card.Header>Quote</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                        {' '}
                        {props.lines.map(renderQuote)}
                        {' '}
                        </p>
                        {props.characters
                            ? <footer className="blockquote-footer">We quoted <cite>{props.characters}</cite>.</footer>
                            : null}
                        {props.year
                            ? <footer className ="blockquote-footer">The movie was made <cite>{props.year}</cite>.</footer>
                            : null}
                    </blockquote>
                </Card.Body>
            </Card>
            <div>{" "}</div>
            {(props.hints || props.characters || props.year)
                ? <Alert variant ={'warning'}>
                    <Alert.Heading>Darn! I forgot to tell you that every hint and quote cost you a point!</Alert.Heading>
                    <p>
                    You've {props.hints !== 1 && "now "} lost  {props.hints} {props.hints === 1 ? "point" : "points"}
                    </p>
                    </Alert>
                : null }
            <div>{" "}</div>
        </>
    );
}
export default connect(mapStateToQuoteBoxProps)(QuoteBox)