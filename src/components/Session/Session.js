import "./style.css";
import Baseboard from "../Baseboard/Baseboard";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import axios from 'axios';

function Seats (props) {
    const {numero} = props;
    return (
        <div className="seats">{numero}</div>
    );
}

export default function Session () {
    const [movie_Seats, setMovie_Seats] = React.useState([]);

    useEffect(() => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/showtimes/26102021/seats");
        
        promisse.then(answer => {
            setMovie_Seats(answer.data.seats);
        });
    }, []);

    return(
        <div className="session-Component">
            <div className="title">
                <h1>Selecione o(s) assento(s)</h1>
            </div>
            <div className="seats-Session">
                {movie_Seats.map(item => <Seats key={item.id} numero={item.name} />)}
            </div>
            <div className="status">
                <div className="status-Type">
                    <div className="seats select"></div>
                    <p>Selecionado</p>
                </div>
                <div className="status-Type">
                    <div className="seats"></div>
                    <p>Disponível</p>
                </div>
                <div className="status-Type">
                    <div className="seats undisponible"></div>
                    <p>Indisponível</p>
                </div>
            </div>
            <div className="buyer-Data">
                <p>Nome do comprador:</p>
                <input type="text" placeholder="   Digite seu nome..."></input>
            </div>
            <div className="buyer-Data">
                <p>CPF do comprador:</p>
                <input type="number" placeholder="   Digite seu CPF..."></input>
            </div>
            <Link to="/sucesso">
                <div className="session-Button">Reservar assentos</div>
            </Link>
            <Baseboard />
        </div>
    );
}