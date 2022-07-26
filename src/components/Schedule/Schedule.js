import "./style.css"
import Baseboard from "../Baseboard/Baseboard";
import { Link } from "react-router-dom";

export default function Schedule () {
    return(
        <>
            <div className="title">
                <h1>Selecione o horário</h1>
            </div>
            <div className="horary">
                <p>Quinta-feira - 24/06/2021</p>
                <div className="session">
                    <Link to="/assentos">
                        <div className="schedule">
                            15:00
                        </div>
                    </Link>
                    <Link to="/assentos">
                        <div className="schedule">
                            19:00
                        </div>
                    </Link>
                </div>
            </div>
            <div className="horary">
                <p>Quinta-feira - 24/06/2021</p>
                <div className="session">
                    <Link to="/assentos">
                        <div className="schedule">
                            15:00
                        </div>
                    </Link>
                    <Link to="/assentos">
                        <div className="schedule">
                            19:00
                        </div>
                    </Link>
                </div>
            </div>
            <Baseboard />
        </>
    );
}