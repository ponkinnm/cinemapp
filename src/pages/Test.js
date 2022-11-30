import React, {useState, useEffect} from 'react';
import GetQuote from '../GetQuote.js';
import TestView from '../TestView';
function Test(props) {
  var [result, setResult] = useState('hello world');
  function getQuoteCB(){
    GetQuote();
    //setResult(response);
  }

  return <div>
    <TestView result = {result} findQuote={getQuoteCB}/>
  </div>
}

export default Test;
