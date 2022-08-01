import { Link } from "react-router-dom";
import "./style.css";

export default function Sucess (props) {
    const {request_Data} = props;
    const seats_Buyed = request_Data.seats.sort((a, b) => a - b);

    return(
        <>
            <div className="title">
                <p>Pedido feito<br/>com sucesso!</p>
            </div>
            <div className="sucess-Data">
                <div className="request-Sucess-Data">
                    <h2>Filme e sessão</h2>
                    <p>{request_Data.movie}</p>
                    <p>{request_Data.date}</p>
                </div>
                <div className="request-Sucess-Data">
                    <h2>Ingressos</h2>
                    {seats_Buyed.map(item => <p>Assento: {item}</p>)}
                </div>
                <div className="request-Sucess-Data">
                    <h2>Comprador</h2>
                    <p>Nome: {request_Data.buyerName}</p>
                    <p>CPF: {request_Data.buyerCPF}</p>
                </div>
            </div>
            <Link to="/">
                <div className="session-Button">Voltar para Home</div>
            </Link>
        </>
    );
}