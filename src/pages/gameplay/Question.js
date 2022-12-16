import React from 'react';
import {Button, Stack} from 'react-bootstrap';
import './quotebox.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import * as events from "events";

function Question(props) {

    function alternativeCB(movie) {
        const id = movie.id
        const title = movie.title

        // const {url:imageUrl} = movie.base.image

        return (<div key={id}>
            <input type="radio"
                   id={id}
                   value={id}
                   name={"answer"}
                   key={id}
                   default={props.hasSelected}
                   onClick={() => {
                       props.onSelect(id)
                   }}
            />
            {/*<label type="radio">*/}
            {/*    <img alt={title} className="radioPic" width={250} src={imageUrl} /></label>*/}
            <label htmlFor={id}>{title}</label>
            {/*<img src={imageUrl} alt={title} />*/}
        </div>)
    }
    function alternativeListCB(movie){
        const id = movie.id
        const title = movie.title
        return(
            <Button variant="outline-secondary" type="submit" key={id} id={id} value={id}
                    style={props.hasSubmittedAnswer? {pointerEvents: 'none'}: null}
                    onClick={() => {props.onSubmit(id)}}>
                {title}
            </Button>

        );
    }
    function handleAnswerACB() {
       // props.onSubmit()
    }
    function nextQuoteRequestACB() {
        props.onNext()
    }

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
export default React.memo(Question);
