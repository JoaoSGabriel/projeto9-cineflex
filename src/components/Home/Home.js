import { Link } from "react-router-dom";
import React from "react";
import { useEffect } from "react";
import axios from 'axios';
import "./style.css";

function Movies (props) {
    const {posterURL} = props;
    return(
        <Link to="/filme">
            <div className="movie-Background">
                <img src={posterURL} alt="coverpage" />
            </div>
        </Link>
    );
}

export default function Home () {
    const [movies_Theaters, setMovies_Theaters] = React.useState([]);

    useEffect(() => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promisse.then(answer => {
            setMovies_Theaters(answer.data);
        });
    }, []);

    return(
        <>
            <div className="title"><h1>Selecione o filme</h1></div>
            <div className="movies">
                {movies_Theaters.map(item => <Movies posterURL={item.posterURL}/>)}
            </div>
        </>
    );
}