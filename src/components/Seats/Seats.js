import React from "react";

export default function Seats (props) {
    const {id, numero, isAvailable, reserved_Seats, setReserved_Seats, number_Reserved_Seats, setNumber_Reserved_Seats} = props;
    const [choose, setChoose] = React.useState('seats');
    const [select, setSelect] = React.useState('true');

    function selectSeat (text) {
        if (text === 'false') {
            setChoose('seats');
            setSelect('true');
            for (let i = 0; i < reserved_Seats.length; i = i + 1) {
                if (reserved_Seats[i] === id) {
                    reserved_Seats.splice(i, 1);
                }
                if (number_Reserved_Seats[i] === numero) {
                    number_Reserved_Seats.splice(i, 1);
                }
            }
        } else if (text === 'true') {
            setChoose('seats select');
            setSelect('false');
            setReserved_Seats([...reserved_Seats, id]);
            setNumber_Reserved_Seats([...number_Reserved_Seats, numero]);
        }
    }

    return (
    <>
        {isAvailable ? (
            <div className={choose}>
                <div onClick={() => selectSeat(select)}>{numero}</div>
            </div>
        ) : (
            <div className="seats unavailable">
                <div onClick={() => alert("Esse assento não está disponível")}>{numero}</div>
            </div>
        )}
    </>);
}