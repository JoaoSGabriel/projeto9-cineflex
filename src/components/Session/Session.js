import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import axios from 'axios';

function Seats (props) {
    const {numero, isAvailable} = props;
    const [choose, setChoose] = React.useState('seats');
    const [select, setSelect] = React.useState('true');

    function selectSeat (text) {
        if (text === 'false') {
            setChoose('seats');
        } else if (text === 'true') {
            setChoose('seats select');
            setSelect('false');
        }
    }

    return (
    <>
        {isAvailable ? (
            <div className={choose}>
                <div onClick={() => selectSeat(select)}>{numero}</div>
            </div>
        ) : (
            <div className="seats unavailable">
                <div onClick={() => alert("Esse assento não está disponível")}>{numero}</div>
            </div>
        )}
    </>);
}

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
    const [request_Post, setRequest_Post] = React.useState({});

    function sucessRequest (event) {
        event.preventDefault();
        setRequest_Data(
        {movie:`${movie_Data_Session1.title}`,
        date:`${movie_Data_Session2.date}-${movie_Data_Session3.name}`,
        seats:[''],
        buyerName:`${name}`,
        buyerCPF: `${registration}`});
        setRequest_Post({
            ids: [],
            name: `${name}`,
            cpf: `${registration}`
        });
        console.log(request_Post);

        // const request = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", request_Post);
        
        // request.then(() => {
        //     setName('');
        //     setRegistration('');
        //     navigate('/sucesso');
        // })

        // request.catch(() => alert('Opa, algo inesperado aconteceu!'));
    }
        
    return(
        <div className="session-Component">
            <div className="title">
                <h1>Selecione o(s) assento(s)</h1>
            </div>
            <div className="seats-Session">
                {movie_Seats.map(item => <Seats key={item.id} isAvailable={item.isAvailable} numero={item.name} />)}
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