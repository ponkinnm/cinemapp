import React from 'react';
import GetQuote from '../GetQuote.js'
function Test(props) {
  const results = GetQuote()
  function quoteCB(quote){
    if(quote.text) return <div>{quote.text.toString()}</div>
  }
  return(
    (results.quotes && results.quotes[0].lines.map(quoteCB)) || <div>error</div>

  )
}

export default Test;
