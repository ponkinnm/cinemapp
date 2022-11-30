import React from 'react';
import GetTitlesByGenre from "../getTitleIdByGenre.js";

function TestTitle(props){
    return (
        <div>{GetTitlesByGenre('action')}</div>
    );
}
export default TestTitle;