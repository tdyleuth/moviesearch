import React from "react";

function Result({ result, openPopup }) {
    return (
        <div className="item" onClick={() => openPopup(result.imdbID)}>
            <img alt={result.Title} src={result.Poster} />
        </div>
    );
}

export default Result;
