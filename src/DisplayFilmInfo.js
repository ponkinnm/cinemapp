import {fetchAllMoviesQ, fetchArrayOfTitleIdsByGenre, fetchMovieQ} from "./movieSource";
import React, {useState} from 'react';
import {BASE_URL, API_KEY} from "./apiConfig";

export default function DisplayFilmInfo(){
    const [film, setFilm] = React.useState();
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': BASE_URL
        }
    }
    async function getMovie(id = 'tt0082971'){
        let quotes=[]
        fetch('https://imdb8.p.rapidapi.com/title/get-quotes?tconst=tt0082971', options)
	       .then(response => response.json())
	       .then(response => {console.log({...response})})
	       .catch(err => console.error(err));
        //setFilm(filmData)
        //console.log(film)
    }
    return <DisplayInfoView onButtonClick={getMovie}/>

}

function DisplayInfoView(props){
    return <div><button onClick={props.onButtonClick}>click me</button></div>
}
