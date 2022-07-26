import { Link } from "react-router-dom";
import "./style.css";

function Movies () {
    return(
        <Link to="/filme">
            <div className="movie-Background">
                <img src="https://br.web.img2.acsta.net/pictures/20/08/18/16/25/0872062.jpg" alt="coverpage" />
            </div>
        </Link>
    );
}

export default function Home () {
    return(
        <>
            <div className="title"><h1>Selecione o filme</h1></div>
            <div className="movies">
                <div className="left-Movies">
                    <Movies />
                    <Movies />
                    <Movies />
                    <Movies />
                    <Movies />
                </div>
                <div className="rigth-Movies">
                    <Movies />
                    <Movies />
                    <Movies />
                    <Movies />
                    <Movies />
                    <Movies />
                </div>
            </div>
        </>
    );
}