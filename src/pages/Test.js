import React, {useState, useEffect} from 'react';
import GetQuote from '../GetQuote.js';
import TestView from '../TestView';
function Test(props) {
  var [result, setResult] = useState('hello world');
  function getQuoteCB(){
    //GetQuote().then(function (result){console.log(result)});
    GetQuote().then(function (res){setResult(res.quotes[0].lines[1].text)});
    //setResult(response[1]);
  }

  return <div>
    <TestView result = {result} findQuote={getQuoteCB}/>
  </div>
}

export default Test;
