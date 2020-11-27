import React, { useEffect, useState } from 'react';
import CryptoJS from "crypto-js";
import Hero from "./Hero";
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row'

export default function Marvel(props) {
    const [heroes, setHeroes] = useState([]);

    useEffect(()=>{
        if(!navigator.onLine){
            if(localStorage.getItem("heroes") === "") {
                setHeroes("Loading...")
            } else {
                setHeroes(JSON.parse(localStorage.getItem("heroes")));
            }
        } else {
            const ts = "MarvelTS";
            const publickey = "3dfca42685605817e7cef15aba7818e8";
            const privatekey = "113a8f617271701af381b583850033f20ca1e66e";
            const hash = CryptoJS.MD5(ts+privatekey+publickey);

            const URL = "http://gateway.marvel.com/v1/public/characters?ts="+ts+"&apikey="+publickey+"&hash="+hash;
            fetch(URL).then(res=>res.json()).then(res=>{
                setHeroes(res.data.results);
                localStorage.setItem("heroes", JSON.stringify(res.data.results));
            })
        }
    }, []);

    return (
        <div className="row justify-content-center">
            <h1>Marvel characters</h1>
            <Row>
                {heroes.map(h => {return <Hero hero={h} key={h.id}/>})}
            </Row>
        </div>);
}
