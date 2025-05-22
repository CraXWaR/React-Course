export default function GameBoard({onSelectSquare, board}) {
    return (
        <ol id='game-board'>
            {board.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((symbol, cellIndex) => <li key={cellIndex}>
                        <button onClick={() => onSelectSquare(rowIndex, cellIndex)}
                                disabled={symbol !== null}>{symbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    );
}