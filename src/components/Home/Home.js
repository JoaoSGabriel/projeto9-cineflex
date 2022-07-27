import { Link } from "react-router-dom";
import "./style.css";

function Movies (props) {
    const {posterURL, id} = props;
    return(
        <Link to="/filme">
            <div className="hidden">{id}</div>
            <div className="movie-Background">
                <img src={posterURL} alt="coverpage" />
            </div>
        </Link>
    );
}

export default function Home ({movies_Theaters}) {
    return(
        <>
            <div className="title"><h1>Selecione o filme</h1></div>
            <div className="movies">
                {movies_Theaters.map(item => <Movies key={item.id} id={item.id} posterURL={item.posterURL}/>)}
            </div>
        </>
    );
}