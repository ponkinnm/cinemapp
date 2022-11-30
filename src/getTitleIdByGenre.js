import {useState, useEffect} from "react";
/**
Function to get titleid based of chosen genre
NoPage is done yet.
Funtion is working just call with a valid genre.
Could be improved by saving the whole array of titles if game should continue in same genre.
 * */
export default function GetTitleIdByGenre(chosenGenre) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const URL = 'https://imdb8.p.rapidapi.com/title/v2/get-popular-movies-by-genre?genre=';
    const options = {
        method: 'GET',
        headers: {'X-RapidAPI-Key': 'bacb10d713mshc282bb17cc3b5c8p1801b6jsn6bd8583b7bea', 'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'}
    };
    //gets one random title from the list of movies
    function getTitleID(titles){
        let index = Math.floor(Math.random() * titles.length);
        const title = titles[index].split('/')[2];
        return title;
    }
    useEffect(() => {
        const getData = async() =>{
            try {
                const response = await fetch(
                    URL + chosenGenre + '&limit=100', options)
                //.then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is a HTTP error: Status is ${response.status}`);
                }
                let actualData = await response.json();
                setData(getTitleID(actualData));
                setError(null);
            }   catch (err) {
                setError(err.message);
                setData(null);
                console.log(error);
            }
        }
        getData()
    }, []);
    //console.log tester to se that it is working
    console.log(data);
    return data;
}