import React from 'react';
import {Button, Stack} from 'react-bootstrap';
import './question.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import * as events from "events";
import {connect} from "react-redux";
import {gameSliceAction} from "../../features/game/gameSlice";

const mapStateToProps = (state) => {
    return {
        hasHintedCharacter:state.game.characters,
        hasHintedYear:state.game.year,
        movies:state.game.movies,
        hasSubmittedAnswer:state.game.hasSubmittedAnswer,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onNext: () => {
            dispatch(gameSliceAction.nextQuote())
        },
        onSubmit: (id) => {dispatch(gameSliceAction.submitAnswer(id))},
    }
}
function Question(props) {

    function alternativeListCB(movie){
        const id = movie.id
        const title = movie.title
        return(
            <Button variant="outline-secondary" type="submit" key={id} id={id} value={id}
                    style={props.hasSubmittedAnswer? {pointerEvents: 'none'}: null}
                    onClick={() => {
                        props.onSubmit(id)
                        props.onNextSet()
                    }}>
                {title}
            </Button>

        );
    }
    function nextQuoteRequestACB() {props.onNext()}

    //planen är att göra hintsen med overlay från react-bootstrap
    return (<Stack direction="vertical" gap={3}>
            <ButtonGroup vertical>
                {props.movies.map(alternativeListCB)}
            </ButtonGroup>
            <Stack >
                <Button onClick={nextQuoteRequestACB} style={props.hasSubmittedAnswer? {pointerEvents: 'none'}: null}>I just need another quote!</Button>
                </Stack>
            </Stack>
        );
}
export default connect(mapStateToProps, mapDispatchToProps)(Question)
// export default React.memo(Question);
