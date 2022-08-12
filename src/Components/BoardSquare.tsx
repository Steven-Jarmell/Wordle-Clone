import "./styles.css";

type Props = {
	letter: string;
	solution: string;
	showColor: boolean;
	listID: number;
	guess: string;
};

const BoardSquare = ({ letter, solution, showColor, listID, guess }: Props) => {
	let solutionArray = solution.split("");
	let guessArray = guess.split("");

	const checkIfCorrect = () => {
		for (let i = 0; i < solutionArray.length; i++) {
			if (solutionArray[i] === letter && i === listID) {
				return true;
			}
		}
		return false;
	}

	const checkIfValid = () => {
		return solutionArray.includes(letter);
	}

	const guessHasMoreThanOneButSolutionHasOne = () => {
		let solutionCount = 0;
		let guessCount = 0;
		for (let i = 0; i < solutionArray.length; i++) {
			if (solutionArray[i] === letter ) {
				solutionCount++;
			}
			if (guess[i] === letter ) {
				guessCount++;
			}
		}

		return guessCount > solutionCount;
	}

	return checkIfCorrect() && showColor ? (
		<p className="board-square noselect correct-letter-space">{letter}</p>
	) : checkIfValid() && !(guessHasMoreThanOneButSolutionHasOne()) && showColor ? (
		<p className="board-square noselect valid-letter">{letter}</p>
	) : (
		<p className="board-square noselect">{letter}</p>
	);
};

export default BoardSquare;
