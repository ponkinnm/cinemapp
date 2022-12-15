import React from "react";
import {Container ,Card,Row, Col, Button} from 'react-bootstrap';

export default function GenrePickerView(props){
    function renderGenres(genre){
        //return <option key ={genre} value={genre}>{genre}</option>
        return <Card key ={genre} value={genre.name} onClick={props.setGenre} style={{width:"250px"}}>
            <Card.Body>
                <Card.Title>{genre.name}  <Button value={genre.name} variant="outline-primary" size="sm">Select</Button></Card.Title>
                <Card.Text>
                  {genre.quote}
                </Card.Text>
            </Card.Body>
        </Card>
    }
    /*return (<div>
        <label htmlFor="genres">Choose a genre:</label>
            <select name="genres" id="genres" onChange={props.setGenre}>
              {props.genres.map(renderGenres)}
            </select>
        </div>)*/
    return (<div>
            <Container className='p-4'>
                <Row>
                    {props.genres.map(renderGenres)}
                </Row>
            </Container>
        </div>

    )
}
//  <Button variant="outline-primary" size="sm">Select</Button>
