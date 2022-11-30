import {BASE_URL, API_KEY} from "./apiConfig";

export default function GetQuote(){
  const movieID = 'tt0068646';
  const options = {
  	method: 'GET',
  	headers: {
  		'X-RapidAPI-Key': API_KEY,
  		'X-RapidAPI-Host': BASE_URL
  	}
  };
  fetch('https://imdb8.p.rapidapi.com/title/get-quotes?tconst=' + movieID, options)
  .then((res) => res.json())
  .then((response) => console.log(response))

  /*'fetch('https://imdb8.p.rapidapi.com/title/get-quotes?tconst=tt0944947', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));*/
  //fetch(BASE_URL + '/get-quotes?tconst=' + movieID, options).then((res) => (console.log(res)))
  /*if (!response.ok)
		throw new Error(`HTTP error! status: ${response.status}`);
  const jsonResponse = await response.json();*/
  //console.log(jsonResponse)
  //return JSON.stringify(jsonResponse);
}
