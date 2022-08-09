import BoardSquare from "./BoardSquare";

type Props = {
    solution: string;
    guess: string;
}

const BoardRow = ({solution, guess}: Props) => {
    const cells = (guess === '') ? ['', '', '', '', ''] : guess.split('');
    while (cells.length !== 5) {
        cells.push('');
    }
    return (
        <div className="board-row">
            {cells.map((c, i) => (
                <BoardSquare key={i} letter={c}/>
            ))}
        </div>
    );
};

export default BoardRow;