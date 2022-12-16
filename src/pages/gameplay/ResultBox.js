import React from 'react';
import Alert from 'react-bootstrap/Alert';
function CorrectResultBox(props) {
    return (
        <Alert variant ={'success'}>
            Congratulations! You scored {props.score} points with {props.hints} hints
        </Alert>
    );
}

function BadResultBox(props) {
    return (
        <Alert variant={'danger'}>
            The right answer was {props.movie}. You scored 0 points.
        </Alert>
    );
}

export {CorrectResultBox, BadResultBox};
