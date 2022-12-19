import React, {} from 'react';
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
    function hintYearACB(){
        props.year || props.onYear();
    }
    /*function characterRequestACB() {props.onCharacter()}
    function yearRequestACB() {props.onYear()}*/
    return <div>
    <Stack direction="vertical" gap={4}>
        <Button
            variant="secondary"
            onClick={hintYearACB}>
            Hint for year
        </Button>
        <Button
            variant="secondary"
            onClick={()=>{props.characters || props.onCharacter()}}>
            Hint for characters
        </Button>
    </Stack>
    </div>
}
export default connect(mapStateToProps, mapDispatchToProps)(HintView)
/*<Button onClick={characterRequestACB} disabled={props.hasHintedCharacter}>Who said what?</Button>
<Button onClick={yearRequestACB} disabled={props.hasHintedYear}>Just give me the Year!</Button>
<Button variant="secondary" onClick={props.setShowCharacter}>Hint for character</Button>


*/
