import React from "react";

function Search({ handleInput, search }) {
    return (
        <section className="searchbox-wrap">
            <input
                type="text"
                placeholder="Search a movie title..."
                className="search-box"
                onChange={handleInput}
                onKeyPress={search}
            />
        </section>
    );
}
export default Search;
