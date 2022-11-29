export default function GetQuote(){
  const movieID = 'tt0068646';
  const options = {
  	method: 'GET',
  	headers: {
  		'X-RapidAPI-Key': '1810a837cdmsh24eefa67ba9ccdbp11ca5fjsn3003c004a78f',
  		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
  	}
  };

fetch('https://online-movie-database.p.rapidapi.com/title/get-trivia?tconst=' + movieID, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}
