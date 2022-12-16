import React,{useRef, useState} from 'react';
import {ListGroup, Overlay, Button} from 'react-bootstrap';

export default function HintView(props){
    const targetYear = useRef(null);
    const targetCharacter = useRef(null);

    /*function characterRequestACB() {props.onCharacter()}
    function yearRequestACB() {props.onYear()}*/
    return <div>
        <Button variant="secondary" onClick={()=>{props.setHintYear(!props.isHintYear)}} ref={targetYear}>Hint for year</Button>
        <Overlay target={targetYear.current} show={props.isHintYear} placement="bottom">
        <div style={{
          position: 'absolute',
          backgroundColor: '#808080',
          padding: '2px 10px',
          color: 'white',
          borderRadius: 3,
        }}>
        {props.movieToQuote.year}</div>
        </Overlay>
        <Button
            variant="secondary"
            onClick={()=>{props.setHintCharacter(!props.isHintCharacter)}}
            ref={targetCharacter}>
            Hint for characters
        </Button>
        <Overlay target={targetCharacter.current} show={props.isHintCharacter} placement="bottom">
        <div style={{
          position: 'absolute',
          backgroundColor: '#808080',
          padding: '2px 10px',
          color: 'white',
          borderRadius: 3,
        }}>
        {props.movieToQuote.characters
            .reduce((text, value, i, array) =>
                text + (i < array.length - 1 ? ', ' : ' and ') + value)}</div>
        </Overlay>
    </div>
}
/*<Button onClick={characterRequestACB} disabled={props.hasHintedCharacter}>Who said what?</Button>
<Button onClick={yearRequestACB} disabled={props.hasHintedYear}>Just give me the Year!</Button>
<Button variant="secondary" onClick={props.setShowCharacter}>Hint for character</Button>*/
