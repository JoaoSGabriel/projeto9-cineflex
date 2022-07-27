import "./reset.css";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import axios from 'axios';
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Schedule from "../Schedule/Schedule";
import Session from "../Session/Session";
import Sucess from "../Sucess/Sucess";

export default function App () {
    const [movies_Theaters, setMovies_Theaters] = React.useState([]);

    useEffect(() => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promisse.then(answer => {
            setMovies_Theaters(answer.data);
        });
    }, []);

    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home movies_Theaters={movies_Theaters}/>} />
                <Route path="/filme" element={<Schedule />} />
                <Route path="/assentos" element={<Session />} />
                <Route path="/sucesso" element={<Sucess />} />
            </Routes>
        </BrowserRouter>
    );
}