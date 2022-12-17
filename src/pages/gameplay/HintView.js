import React, {useRef} from 'react';
import {ListGroup, Overlay, Button, Stack} from 'react-bootstrap';
import {connect} from "react-redux";
import {gameSliceAction} from "../../features/game/gameSlice";

const mapStateToProps = (state) => {
    return {
        characters:state.game.characters,
        year:state.game.year,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onNext: () => {
            dispatch(gameSliceAction.nextQuote())
        },
        onCharacter:() => {
            dispatch(gameSliceAction.showCharacters())
        },
        onYear: () => {dispatch(gameSliceAction.showYear())}
    }
}
function HintView(props){
    const targetYear = useRef(null);
    const targetCharacter = useRef(null);
    function hintYearACB(){
        // props.setHintYear(!props.isHintYear);
        props.onYear();
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
            onClick={()=>{props.onCharacter()}}
            ref={targetCharacter}>
            Hint for characters
        </Button>
    </Stack>
        <Overlay
            target={targetYear.current}
            show={props.year}
            placement="top">
            <div style={{
              position: 'absolute',
              backgroundColor: '#808080',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
            }}>
            {props.year}</div>
        </Overlay>

        <Overlay
            target={targetCharacter.current}
            show={props.characters}
            placement="top">
            <div style={{
              position: 'absolute',
              backgroundColor: '#808080',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
            }}>{props.characters}
            </div>
        </Overlay>
    </div>
}
export default connect(mapStateToProps, mapDispatchToProps)(HintView)
/*<Button onClick={characterRequestACB} disabled={props.hasHintedCharacter}>Who said what?</Button>
<Button onClick={yearRequestACB} disabled={props.hasHintedYear}>Just give me the Year!</Button>
<Button variant="secondary" onClick={props.setShowCharacter}>Hint for character</Button>


*/
