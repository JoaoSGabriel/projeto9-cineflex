import "./style.css"
import Baseboard from "../Baseboard/Baseboard";
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

export default function Schedule () {
    const [movie_Sessions, setMovie_Sessions] = React.useState([]);

    useEffect(() => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies/2/showtimes");

        promisse.then(answer => {
            setMovie_Sessions(answer.data.days);
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
            <Baseboard />
        </>
    );
}