import "./style.css"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import axios from 'axios';

function Horary (props) {
    const {weekday, date, time1, time2} = props;
    return(
            <div className="horary">
                <p>{weekday} - {date}</p>
                <div className="session-Schedule">
                    <Link to="/assentos">
                        <div className="schedule">
                            {time1}
                        </div>
                    </Link>
                    <Link to="/assentos">
                        <div className="schedule">
                            {time2}
                        </div>
                    </Link>
                </div>
            </div>
    );
}

export default function Schedule (props) {
    const {movieID} = props;
    const [movie_Sessions, setMovie_Sessions] = React.useState([]);
    const [movie_Data, setMovie_Data] = React.useState([]);

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieID}/showtimes`);

        promisse.then(answer => {
            setMovie_Sessions(answer.data.days);
            setMovie_Data(answer.data);
        });
    }, []);
    
    return(
        <>
            <div className="title">
                <h1>Selecione o horário</h1>
            </div>
            <div className="horary-Component">
                {movie_Sessions.map(item => <Horary key={item.id} weekday={item.weekday} date={item.date} time1={item.showtimes[0].name} time2={item.showtimes[1].name}/>)}
            </div>
            <div className="baseboard">
                <div className="movie-Background">
                    <img src={movie_Data.posterURL} alt="coverpage" />
                </div>
                <p>{movie_Data.title}</p>
            </div>
        </>
    );
}