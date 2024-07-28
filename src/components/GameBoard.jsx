
// Inizializza la scacchiera del gioco con tutte le posizioni vuote (null)
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],

];

export default function GameBoard({ onSelectSquare, turns }) {
    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }
    // Usa lo stato per memorizzare la scacchiera del gioco
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // // Funzione chiamata quando un quadrato della scacchiera viene selezionato
    // function handleSelectSquare(rowIndex, colIndex) {
    //     // Aggiorna lo stato della scacchiera
    //     setGameBoard((prevGameBoard) => {
    //         // Crea una copia della scacchiera precedente per evitare modifiche dirette
    //         const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         // Imposta il simbolo 'X' nella posizione selezionata
    //         updateBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         // Restituisce la nuova scacchiera aggiornata
    //         return updateBoard;
    //     });
    //     onSelectSquare();
    // }
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}