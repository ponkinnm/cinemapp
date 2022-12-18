import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './genre-picker.css'

export default function GenrePickerView(props) {
    function renderGenres(genre) {
        return (
            <Carousel.Item onClick={() => props.setGenre(genre.name)} key={genre.name}>
                <Card className={"d-flex justify-content-center"}
                      key={genre.name} value={genre.name} style={{width: "auto"}}>
                    <Card.Header className={"text-center"}>Choose your genre to play</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col className="text-capitalize text-center">
                                <Card.Title>{genre.name}</Card.Title></Col>
                        </Row>
                        <div className="w-100 text-center d-flex justify-content-center">
                            <Card.Text>{`"${genre.quote}"`}</Card.Text>

                        </div>

                    </Card.Body>
                    <div className="overflow-hidden">

                        <Card.Img
                            className="d-block w-100"
                            variant="bottom"
                            src={genre.img}
                            alt={genre.name}
                            style={{alignSelf: "center"}}
                        />
                    </div>
                </Card>
            </Carousel.Item>
        )
    }

    return (<div className="m-auto">
        <Container>
            <Carousel pause='hover' variant='dark' className='p-4 align-middle' id="genres">

                {props.genres.map(renderGenres)}

            </Carousel>
        </Container>
    </div>)
}
