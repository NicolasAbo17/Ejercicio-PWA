import React, { useState, useEffect } from 'react';

function Joke() {
    let [joke, setJoke] = useState("");

    useEffect(() => {
        if (!navigator.onLine) {
            if (localStorage.getItem("joke") === null) {
                setJoke("Loading...")
            } else {
                setJoke(localStorage.getItem("joke"));
            }
        } else {
            const URL = "https://api.chucknorris.io/jokes/random";
            fetch(URL).then(res => res.json()).then(res => {
                setJoke(res.value);
                localStorage.setItem("joke", res.value);
            })
        }
    }, []);

    return (
        <div className="joke-component">
            <h1>Joke</h1>
            <p>{joke}</p>
        </div>
    );
}

export default Joke;