import React, {useState} from 'react';
import GetQuote from '../GetQuote.js'
function Test(props) {
  var [result, setResult] = useState('hello world');
  const response = async () => {await GetQuote()};
  const quote = response.quotes;

  return <div>
    <button onClick={setResult(quote)}>
      Click me
    </button>
    <div>{result}</div>
  </div>
}

export default Test;
