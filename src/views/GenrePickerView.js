import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import ingrid from "../img/bergman - intermezzo.jpg"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function GenrePickerView(props){
    function renderGenres(genre){
        return(
            <Carousel.Item key={genre.name}>
                <Card className={"d-flex justify-content-center"}
                      key ={genre.name} value={genre.name}  style={{width:"auto"}}>
                    <Card.Header className={"text-center"}>Choose your genre to play</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col style={{textAlign: "center"}}>
                                <Card.Title>{genre.name}</Card.Title></Col>
                            <Button
                                value={genre.name}
                                onClick={props.setGenre}
                                variant="outline-dark"
                                size="sm">Select
                            </Button>
                        </Row>
                        <Card.Text>{genre.quote}</Card.Text>
                    </Card.Body>
                <Card.Img
                    className="d-block w-100"
                    variant="bottom"
                    src={genre.img}
                    alt={genre}
                    style={{alignSelf:"center"}}
                     />
                </Card>
            </Carousel.Item>
        )
    }
    return (<div className="m-auto">
        <Container className='p-4' >
        <Carousel pause='hover' variant='dark' className='p-4 align-middle' id="genres">

                {props.genres.map(renderGenres)}

        </Carousel>
        </Container>
    </div>)
}
