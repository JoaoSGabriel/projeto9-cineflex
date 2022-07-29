import "./reset.css";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Schedule from "../Schedule/Schedule";
import Session from "../Session/Session";
import Sucess from "../Sucess/Sucess";

export default function App () {
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sessoes/:idFilme" element={<Schedule />} />
                <Route path="/assentos/:idSessao" element={<Session />} />
                <Route path="/sucesso" element={<Sucess />} />
            </Routes>
        </BrowserRouter>
    );
}