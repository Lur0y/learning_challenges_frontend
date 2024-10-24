import { useNavigate } from "react-router-dom";

export default function Home(){

    const navigate = useNavigate();

    return(
        <>
            <br />
            <h1>Por ahora no tengo home, asi que solo pondre unas ligas rapidas</h1>
            <br />
            <ul>
                <li onClick={() => {navigate('/tictactoe')}}>Juego de gato</li>
                <li onClick={() => {navigate('/followcursor')}}>Seguimiento al cursor</li>
            </ul>
        </>
    );

}