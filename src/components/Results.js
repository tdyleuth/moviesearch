import React from "react";
import Result from "./Result";

function Results({ results, openPopup }) {
    console.log("DFdf", results);
    if (typeof results != "undefined") {
        return (
            <section className="results">
                {results.map((result) => (
                    <Result
                        key={result.imdbID}
                        result={result}
                        openPopup={openPopup}
                    />
                ))}
            </section>
        );
    } else {
        return <h1 className="noresults">No search results, try again!</h1>;
    }
}

export default Results;
