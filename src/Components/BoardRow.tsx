import BoardSquare from "./BoardSquare";

type Props = {
	solution: string;
	guess: string;
	showColor: boolean;
};

const BoardRow = ({ solution, guess, showColor }: Props) => {
	const cells = guess === "" ? ["", "", "", "", ""] : guess.split("");
	while (cells.length < 5) {
		cells.push("");
	}
	return (
		<div className="board-row">
			{cells.map((c, i) => (
				<BoardSquare key={i} listID ={i} letter={c} solution={solution} showColor={showColor} guess={guess}/>
			))}
		</div>
	);
};

export default BoardRow;
