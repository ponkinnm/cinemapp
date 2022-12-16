import React from 'react';
import {Card,Button, Stack, ListGroup} from 'react-bootstrap';
import './quotebox.css';

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
                   onInput={() => {
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
            <ListGroup.Item default={props.hasSelected} action key={id} id={id} value={id} onClick={() => {
                props.onSelect(id)
            }}>
                {title}
            </ListGroup.Item>

        );
    }
    function handleAnswerACB() {
        props.onSubmit()
    }
    function nextQuoteRequestACB() {
        props.onNext()
    }

    //planen är att göra hintsen med overlay från react-bootstrap
    return (<Stack direction="vertical" gap={3}>
            <ListGroup>
                {props.movies.map(alternativeListCB)}
            </ListGroup>
            <Stack direction="horizontal" gap={2}>
            <Button className="width:50%" onClick={handleAnswerACB} type={"submit"} disabled={props.hasSelected === ""}>Submit</Button>
            <Button onClick={nextQuoteRequestACB}>I just need another quote!</Button>
            </Stack>
            </Stack>
        );
}
export default React.memo(Question);
