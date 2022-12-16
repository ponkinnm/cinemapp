import React, {useRef, useState} from 'react';
import {ListGroup, Overlay, Button, Stack} from 'react-bootstrap';

export default function HintView(props){
    const targetYear = useRef(null);
    const targetCharacter = useRef(null);
    function hintYearACB(){
        props.setHintYear(!props.isHintYear);
    }
    /*function characterRequestACB() {props.onCharacter()}
    function yearRequestACB() {props.onYear()}*/
    return <div>
    <Stack direction="vertical" gap={4}>
        <Button
            variant="secondary"
            onClick={hintYearACB}
            ref={targetYear}>
            Hint for year
        </Button>
        <Button
            variant="secondary"
            onClick={()=>{props.setHintCharacter(!props.isHintCharacter)}}
            ref={targetCharacter}>
            Hint for characters
        </Button>
    </Stack>
        <Overlay
            target={targetYear.current}
            show={props.isHintYear}
            placement="top">
            <div style={{
              position: 'absolute',
              backgroundColor: '#808080',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
            }}>
            {props.movieToQuote.year}</div>
        </Overlay>

        <Overlay
            target={targetCharacter.current}
            show={props.isHintCharacter}
            placement="top">
            <div style={{
              position: 'absolute',
              backgroundColor: '#808080',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
            }}>{props.movieToQuote.characters
                .reduce((text, value, i, array) =>
                    text + (i < array.length - 1 ? ', ' : ' and ') + value)}
            </div>
        </Overlay>
    </div>
}
/*<Button onClick={characterRequestACB} disabled={props.hasHintedCharacter}>Who said what?</Button>
<Button onClick={yearRequestACB} disabled={props.hasHintedYear}>Just give me the Year!</Button>
<Button variant="secondary" onClick={props.setShowCharacter}>Hint for character</Button>


*/
