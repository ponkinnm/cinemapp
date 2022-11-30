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
  function quoteACB(res){
    //console.log(res)
    return res;
  }
  return fetch('https://imdb8.p.rapidapi.com/title/get-quotes?tconst=' + movieID, options)
  .then((res) => res.json())
  .then(quoteACB)
}
