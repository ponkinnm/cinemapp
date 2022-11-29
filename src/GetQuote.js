import {BASE_URL, API_KEY} from "./apiConfig";

export default function GetQuote(){
  const movieID = 'tt0068646';
  const options = {
  	method: 'GET',
  	headers: {
  		'X-RapidAPI-Key': BASE_URL,
  		'X-RapidAPI-Host': API_KEY
  	}
  };

return fetch(BASE_URL + '/title/get-quotes?tconst=' + movieID, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}
