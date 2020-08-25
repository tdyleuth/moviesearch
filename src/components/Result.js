import React from "react";

function Result({ result }) {
    return (
        <div className="result">
            <img alt="" src={result.Poster} />
            <h3>{result.Title}</h3>
        </div>
    );
}

export default Result;
