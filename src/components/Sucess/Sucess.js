import { Link } from "react-router-dom";
import "./style.css";

export default function Sucess () {
    return(
        <>
            <div className="title">
                <p>Pedido feito<br/>com sucesso!</p>
            </div>
            <div className="sucess-Data">
                <div className="request-Sucess-Data">
                    <h2>Filme e sessão</h2>
                    <p>Nome do filme</p>
                    <p>data e horário do filme</p>
                </div>
                <div className="request-Sucess-Data">
                    <h2>Ingressos</h2>
                    <p>assento escolhido(use map)</p>
                </div>
                <div className="request-Sucess-Data">
                    <h2>Comprador</h2>
                    <p>Nome: nome aqui</p>
                    <p>CPF: número aqui</p>
                </div>
            </div>
            <Link to="/">
                <div className="session-Button">Voltar para Home</div>
            </Link>
        </>
    );
}