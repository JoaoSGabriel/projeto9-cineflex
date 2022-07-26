import "./style.css";
import Baseboard from "../Baseboard/Baseboard";
import { Link } from "react-router-dom";

const seats = [{
    "id": 1,
    "name": "1",
    "isAvailable": false,
},
{
    "id": 2,
    "name": "2",
    "isAvailable": true,
},
{
    "id": 3,
    "name": "3",
    "isAvailable": true,
},
{
    "id": 4,
    "name": "4",
    "isAvailable": true,
},
{
    "id": 5,
    "name": "5",
    "isAvailable": true,
},
{
    "id": 6,
    "name": "6",
    "isAvailable": true,
},
{
    "id": 7,
    "name": "7",
    "isAvailable": true,
},
{
    "id": 8,
    "name": "8",
    "isAvailable": true,
},
{
    "id": 9,
    "name": "9",
    "isAvailable": true,
},
{
    "id": 10,
    "name": "10",
    "isAvailable": true,
}]

function Seats (props) {
    const {numero} = props;
    return (
        <div className="seats">{numero}</div>
    );
}

export default function Session () {
    return(
        <div className="session-Component">
            <div className="title">
                <h1>Selecione o(s) assento(s)</h1>
            </div>
            <div className="seats-Session">
                {seats.map(item => <Seats numero={item.name} />)}
                {seats.map(item => <Seats numero={item.name} />)}
                {seats.map(item => <Seats numero={item.name} />)}
                {seats.map(item => <Seats numero={item.name} />)}
                {seats.map(item => <Seats numero={item.name} />)}
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