import Square from "@/components/TicTacToe/Square";
import styles from '@/styles/TicTacToe/TictacToe.module.scss';

export default function WinnerModal({winnerText, winner}){

    return(
        <>
            <section className={styles['styles.winner']}>
                <div className={styles['styles.text']}>
                    <h2>{winnerText}</h2>
                    <header className={styles['styles.win']}>
                        {winner && <Square>{winner}</Square>}
                    </header>
                    <footer>
                        <button onClick={() => {window.location.reload();}}>Empezar de nuevo</button>
                    </footer>
                </div>
            </section>
        </>
    );

}