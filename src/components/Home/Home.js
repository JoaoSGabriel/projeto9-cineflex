import { Link } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import axios from 'axios';
import "./style.css";

export default function Home (props) {
    const {setMovieID} = props;
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
                {movies_Theaters.map(item => <Link to="/filme"><div className="movie-Background" onClick={() => setMovieID(item.id)}><img src={item.posterURL} alt="coverpage" /></div></Link>)}
            </div>
        </>
    );
}