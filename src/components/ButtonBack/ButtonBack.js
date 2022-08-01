import { useNavigate } from "react-router-dom";
import "./style.css";

export default function ButtonBack() {
    const history = useNavigate();
    return (
        <>
            <div className="button-Back" onClick={() => history(-1)}><ion-icon name="arrow-back-outline"></ion-icon></div >
        </>
    );
}