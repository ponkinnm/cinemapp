import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {ref, push, update, onValue } from 'firebase/database'
import {database} from "../firebaseConfig";
import {useSelector} from "react-redux";
import {selectUser} from "../features/auth/authSlice";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";



const mapStateToProps = (state) =>{
    return {
        score: state.game.score,
        totalScore: state.game.totalScore
    }
}
function HighScorePresenter(props) {
    const user = useSelector(selectUser);
    const dbRef = ref(database, `users/${user.uid}`)
    const dbRefHighScore = ref(database, `users/${user.uid}/highScore`)
    const [highscoreDb, setHighscoreDb] = useState(getHighScoreFromDb);
    useEffect(()=> {
        setHighscoreDb("");
    }, []);
    //Helper function to appendHighScore to db
    function appendHighScore(score) {
        let highScore = [score]
        highScore.push(highscoreDb.toString())
        return highScore
    }
    //function to call when push a new score to db
    function updateDb(score){
        if(score === 0){ return; }
        update(dbRef, {highScore: [appendHighScore(score)]
            }).catch(err => console.error(err));
    }
    //Getter for highScore from logged in user
    async function getHighScoreFromDb() {
        onValue(dbRef, (response) => {
            if(response.exists() === true) {
            setHighscoreDb( [...response.val().highScore])}
        })
    }
    //Checker func to se that you can push to db
    function upd(){
        updateDb(0);
    }
    console.log(highscoreDb);
    //just checker to push to db
    return (

        <div>
            {highscoreDb &&
             <Row>{user.displayName }{" "}{highscoreDb.toString()}
             </Row>}
            <Row> <Button onClick={upd} type="submit">Update</Button>
            <Button onClick={getHighScoreFromDb} type="submit">get highScore</Button> </Row>
        </div>
    )

}
export default connect(mapStateToProps)(HighScorePresenter)