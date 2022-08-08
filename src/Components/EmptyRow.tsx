import BoardSquare from "./BoardSquare";

const EmptyRow = () => {
    const emptyCells = [" ", " ", " ", " ", " "];
    return (
        <div className="board-row">
            {emptyCells.map((c) => (
                <BoardSquare letter={c}/>
            ))}
        </div>
    );
};

export default EmptyRow;