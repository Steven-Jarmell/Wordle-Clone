import BoardSquare from "./BoardSquare";

type Props = {
    solution: string;
    guess: string;
}

const BoardRow = ({solution, guess}: Props) => {
    const emptyCells = [''];
    return (
        <div className="board-row">
            {emptyCells.map((c) => (
                <BoardSquare letter={c}/>
            ))}
        </div>
    );
};

export default BoardRow;