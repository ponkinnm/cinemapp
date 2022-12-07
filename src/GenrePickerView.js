import React from "react";

export default function GenrePickerView(props){
    function renderGenres(genre){
        return <option key ={genre} value={genre}>{genre}</option>
    }
    return (<div>
        <label htmlFor="genres">Choose a genre:</label>
            <select name="genres" id="genres" onChange={props.setGenre}>
              {props.genres.map(renderGenres)}
            </select>
        </div>)

}
