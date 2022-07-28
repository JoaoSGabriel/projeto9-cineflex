import { Link } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import axios from 'axios';
import "./style.css";

function Movie (props) {
    const {movie_ID, posterURL} = props;
    return(
        <Link to={`/sessoes/${movie_ID}`}>
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
                {movies_Theaters.map(item => <Movie key={item.id} movie_ID={item.id} posterURL={item.posterURL}/>)}
            </div>
        </>
    );
}