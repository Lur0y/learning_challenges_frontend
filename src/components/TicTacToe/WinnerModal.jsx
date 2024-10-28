import Square from "@/components/TicTacToe/Square";
import styles from '@/styles/TicTacToe/TictacToe.module.scss';
import { useNavigate } from "react-router-dom";

export default function WinnerModal({winnerText, winner}){

    return(
        <>
            <section className={styles['winner']}>
                <div className={styles['text']}>
                    <h2>{winnerText}</h2>
                    <header className={styles['win']}>
                        {winner && <Square>{winner}</Square>}
                    </header>
                    <footer>
                        <button onClick={() => {window.location.reload();}}>Ir a inicio</button>
                    </footer>
                </div>
            </section>
        </>
    );

}