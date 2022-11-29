import {BASE_URL, API_KEY} from "./apiConfig";

export default async function GetQuote(){
  const movieID = 'tt0068646';
  const options = {
  	method: 'GET',
  	headers: {
  		'X-RapidAPI-Key': BASE_URL,
  		'X-RapidAPI-Host': API_KEY
  	}
  };
  const response = await fetch(BASE_URL + '/get-quotes?tconst=' + movieID, options);
  if (!response.ok)
		throw new Error(`HTTP error! status: ${response.status}`);
  const jsonResponse = await response.json();
  return jsonResponse;
}
