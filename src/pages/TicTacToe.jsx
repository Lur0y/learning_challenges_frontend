import { useState } from "react";
import Game from "@/components/TicTacToe/Game";
import styles from '@/styles/TicTacToe/TictacToe.module.scss';

export default function TicTacToe(){

	const dim = 3;
	const [board, setBoard] = useState(Array(dim).fill().map(() => Array(dim).fill('')));

	return(
		<div className={styles['tictactoe-root']}>
			<Game dim={dim} board={board} setBoard={setBoard} />
		</div>
	);

}