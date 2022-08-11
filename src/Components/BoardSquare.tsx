import "./styles.css";

type Props = {
	letter: string;
	solution: string;
	showColor: boolean;
	listID: number;
};

const BoardSquare = ({ letter, solution, showColor, listID }: Props) => {
	let solutionArray = solution.split("");
	/*
	return solutionArray.includes(letter) && showColor ? (
		<p className="board-square noselect valid-letter">{letter}</p>
	) : (
		<p className="board-square noselect">{letter}</p>
	);
	*/
	return solutionArray.indexOf(letter) === listID && showColor ? (
		<p className="board-square noselect correct-letter-space">{letter}</p>
	) : solutionArray.includes(letter) && showColor ? (
		<p className="board-square noselect valid-letter">{letter}</p>
	) : (
		<p className="board-square noselect">{letter}</p>
	);
};

export default BoardSquare;
