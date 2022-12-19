import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import HighScorePresenter from "./presenters/HighScorePresenter";
export default function StartButton() {
    const [show, setShow] = useState(false);

    return (
        <div className="d-grid gap-2">
            {!show ?
            <Button
                className='high-score'
                variant="secondary"
                onClick={() => setShow(true)}
            >Show HighScore</Button>
            :
                <HighScorePresenter/>}

        </div>)

}