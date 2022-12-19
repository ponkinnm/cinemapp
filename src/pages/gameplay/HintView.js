import React, {} from 'react';
import {ListGroup, Overlay, Button, Stack} from 'react-bootstrap';
import {connect} from "react-redux";
import {mapDispatchToHintViewProps, mapStateToHintViewProps} from "../../features/game/gameMap";

function HintView(props){
    function hintYearACB(){
        props.year || props.onYear();
    }
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
export default connect(mapStateToHintViewProps, mapDispatchToHintViewProps)(HintView)