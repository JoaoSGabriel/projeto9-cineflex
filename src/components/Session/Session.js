import "./style.css";
import { Link, useParams } from "react-router-dom";
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
    const params = useParams();
    const [movie_Seats, setMovie_Seats] = React.useState([]);
    const [movie_Data_Session1, setMovie_Data_Session1] = React.useState([]);
    const [movie_Data_Session2, setMovie_Data_Session2] = React.useState([]);
    const [movie_Data_Session3, setMovie_Data_Session3] = React.useState([]);

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.idSessao}/seats`);
        
        promisse.then(answer => {
            setMovie_Seats(answer.data.seats);
            setMovie_Data_Session1(answer.data.movie);
            setMovie_Data_Session2(answer.data.day);
            setMovie_Data_Session3(answer.data);
        });
    }, [params.idSessao]);

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
            <div className="baseboard">
                <div className="movie-Background">
                    <img src={movie_Data_Session1.posterURL} alt="coverpage" />
                </div>
                <div>
                    <p>{movie_Data_Session1.title}</p>
                    <p>{movie_Data_Session2.weekday} - {movie_Data_Session3.name}</p>
                </div>
            </div>
        </div>
    );
}