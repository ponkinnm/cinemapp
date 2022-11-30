import React, {useState, useEffect} from 'react';
import GetQuote from '../GetQuote.js';
import TestView from '../TestView';
function Test(props) {
  var [result, setResult] = useState('hello world');
  var [answer, setAnswer] = useState('');
  var [movie, setMovie] = useState('');
  function renderQuotes(movie){
    setMovie(movie);
    setResult(movie.quotes[0].lines[1].text);
  }
  function getAnswerCB(){
    setAnswer(movie.base.title)
  }
  function getQuoteCB(){
    GetQuote().then(function (result){console.log(result)});
    GetQuote().then(function (quote){renderQuotes(quote)});
    //setResult(response[1]);
  }

  return <div>
    <TestView result = {result} findQuote={getQuoteCB} answer = {answer}
    getAnswer={getAnswerCB}/>
  </div>
}

export default Test;
