import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Seats from "../Seats/Seats";
import React from "react";
import axios from 'axios';

export default function Session (props) {
    const {setRequest_Data} = props;
    const navigate = useNavigate();
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

    const [name, setName] = React.useState('');
    const [registration, setRegistration] = React.useState('');
    const [reserved_Seats, setReserved_Seats] = React.useState([]);
    const [number_Reserved_Seats, setNumber_Reserved_Seats] = React.useState([]);

    function sucessRequest (event) {
        event.preventDefault();
        setRequest_Data(
        {movie:`${movie_Data_Session1.title}`,
        date:`${movie_Data_Session2.date} - ${movie_Data_Session3.name}`,
        seats: number_Reserved_Seats,
        buyerName:`${name}`,
        buyerCPF: `${registration}`});
        let request_Post = {
            ids: reserved_Seats,
            name: `${name}`,
            cpf: `${registration}`
        };
        const request = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", request_Post);
        
        request.then(() => {
            setName('');
            setRegistration('');
            request_Post = {
                ids: "",
                name: "",
                cpf: ""
            };
            if (reserved_Seats.length > 0) {
                navigate('/sucesso');
            } else {
                alert('Você precisa escolher ao menos uma poltrona para realizar o pedido!')
            }
        })

        request.catch(() => alert('Opa, algo inesperado aconteceu!'));
    }
        
    return(
        <div className="session-Component">
            <div className="title">
                <h1>Selecione o(s) assento(s)</h1>
            </div>
            <div className="seats-Session">
                {movie_Seats.map(item => <Seats key={item.id} id={item.id} isAvailable={item.isAvailable} numero={item.name} reserved_Seats={reserved_Seats} setReserved_Seats={setReserved_Seats} number_Reserved_Seats={number_Reserved_Seats} setNumber_Reserved_Seats={setNumber_Reserved_Seats}/>)}
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
                    <div className="seats unavailable"></div>
                    <p>Indisponível</p>
                </div>
            </div>
            <form onSubmit={e => sucessRequest(e)}>
                <div className="buyer-Data">
                    <p>Nome do comprador:</p>
                    <input type="text" placeholder="   Digite seu nome..." onChange={e => setName(e.target.value)} value={name} required></input>
                </div>
                <div className="buyer-Data">
                    <p>CPF do comprador:</p>
                    <input type="text" placeholder="   Digite seu CPF..." onChange={e => setRegistration(e.target.value)} value={registration} required></input>
                </div>
                <button type="submit" className="session-Button">Reservar assentos</button>
            </form>
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
