import React from 'react';
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";

export default function StartButton() {
    const navigate = useNavigate();

    return (
        <div className="d-grid gap-2">
            <Button
                className='start-game'
                variant="secondary"
                type={"submit"}
                onClick={() => {navigate('/game');}}
            >Play game</Button>

        </div>)

}