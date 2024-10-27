import styles from '@/styles/TicTacToe/TictacToe.module.scss';

export default function Square({children, updateBoard, className, isSelected}){

    return (
        <>
            <div className={`${styles['square']} ${isSelected? styles['is-selected'] : ''} ${className}`} onClick={updateBoard}>
                {children}
            </div>
        </>
    );
    
}