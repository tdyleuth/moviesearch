import React, { useState } from "react";
import Search from "./components/Search";
import Results from "./components/Results";
import Popup from "./components/Popup";
import axios from "axios";

function App() {
    const [state, setState] = useState({
        searchVal: "",
        results: [],
        selected: {},
    });

    const search = async (e) => {
        if (e.key === "Enter") {
            try {
                let res = await axios(API_URL + "&s=" + state.searchVal);

                let results = res.data.Search;

                setState((prevState) => {
                    return { ...prevState, results: results };
                });
            } catch (err) {
                console.error(err);
                throw err;
            }
        }
    };

    const API_URL = "http://www.omdbapi.com/?apikey=2dbbeda7";

    const handleInput = (e) => {
        let searchVal = e.target.value;

        setState((prevState) => {
            return { ...prevState, searchVal: searchVal };
        });
    };

    const openPopup = async (id) => {
        try {
            console.log("id is", id);
            let res = await axios(API_URL + "&i=" + id);
            let results = res.data;

            setState((prevState) => {
                return { ...prevState, selected: results };
            });
        } catch (err) {
            console.error(err);
        }
    };

    const closePopup = () => {
        setState((prevState) => {
            return { ...prevState, selected: {} };
        });
    };
    return (
        <div className="App">
            <header>
                <h1>Movie Database</h1>
            </header>
            <main>
                <Search handleInput={handleInput} search={search} />

                <Results results={state.results} openPopup={openPopup} />

                {typeof state.selected.Title != "undefined" ? (
                    <Popup selected={state.selected} closePopup={closePopup} />
                ) : (
                    false
                )}
            </main>
        </div>
    );
}

export default App;
