import "./style.css"
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import axios from 'axios';

function Horary (props) {
    const {weekday, date, time1, time2, index, movie_Sessions} = props;

    return(
            <div className="horary">
                <p>{weekday} - {date}</p>
                <div className="session-Schedule">
                    <Link to={`/assentos/${movie_Sessions[index].showtimes[0].id}`}>
                        <div className="schedule">
                            {time1}
                        </div>
                    </Link>
                    <Link to={`/assentos/${movie_Sessions[index].showtimes[1].id}`}>
                        <div className="schedule">
                            {time2}
                        </div>
                    </Link>
                </div>
            </div>
    );
}

export default function Schedule () {
    const params = useParams();
    const [movie_Sessions, setMovie_Sessions] = React.useState([]);
    const [movie_Data_Schedule, setMovie_Data_Schedule] = React.useState([]);

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.idFilme}/showtimes`);

        promisse.then(answer => {
            setMovie_Sessions(answer.data.days);
            setMovie_Data_Schedule(answer.data);
        });
    }, [params.idFilme]);
    
    return(
        <>
            <div className="title">
                <h1>Selecione o horário</h1>
            </div>
            <div className="horary-Component">
                {movie_Sessions.map((item, index) => <Horary key={item.id} index={index} weekday={item.weekday} date={item.date} time1={item.showtimes[0].name} time2={item.showtimes[1].name} movie_Sessions={movie_Sessions}/>)}
            </div>
            <div className="baseboard">
                <div className="movie-Background">
                    <img src={movie_Data_Schedule.posterURL} alt="coverpage" />
                </div>
                <p>{movie_Data_Schedule.title}</p>
            </div>
        </>
    );
}