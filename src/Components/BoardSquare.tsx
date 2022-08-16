import "./styles.css";

type Props = {
	letter: string;
	solution: string;
	showColor: boolean;
	listID: number;
	guess: string;
};

// Create arrays for easy keyboard coloring
let correctArray: string[] = [];
let validArray: string[] = [];
let invalidArray: string[] = [];

const BoardSquare = ({ letter, solution, showColor, listID, guess }: Props) => {
	// Create an array to store the chars of the solution word
	let solutionArray = solution.split("");

	// Check if the character in the current index of the guess is correct
	const checkIfCorrect = () => {
		for (let i = 0; i < solutionArray.length; i++) {
			if (solutionArray[i] === letter && i === listID) {
				return true;
			}
		}
		return false;
	};

	// Check if the current character is in the solution
	const checkIfValid = () => {
		return solutionArray.includes(letter);
	};

	// Check if the current guess has more than one of the same character but the solution only has one of this character
	const guessHasMoreThanOneButSolutionHasOne = () => {
		let solutionCount = 0;
		let guessCount = 0;
		for (let i = 0; i < solutionArray.length; i++) {
			if (solutionArray[i] === letter) {
				solutionCount++;
			}
			if (guess[i] === letter) {
				guessCount++;
			}
		}

		return guessCount > solutionCount;
	};

	// Push character into respective array for later
	if (checkIfCorrect() && showColor) {
		correctArray.push(letter);
	} else if (checkIfValid() && showColor) {
		validArray.push(letter);
	} else if (showColor) {
		invalidArray.push(letter);
	}

	/**
	 * Logic for determining the color of the board square
	 * If its in the correct index -> color it green
	 * If its in the solution but not in the right index -> color it yellow.
	 * Also color it yellow if the solution has more than one of the char and the other is not in the right position
	 * If its not in the solution -> color is gray
	 * Also color it gray if it is in the solution but the guess has > 1 of the char and the the solution only has one of the char
	 */
	return checkIfCorrect() && showColor ? (
		<p className={`board-square noselect correct-letter-space column${listID}`}>
			{letter}
		</p>
	) : checkIfValid() && !guessHasMoreThanOneButSolutionHasOne() && showColor ? (
		<p className={`board-square noselect valid-letter column${listID}`}>
			{letter}
		</p>
	) : (
		<p className={`board-square noselect column${listID}`}>{letter}</p>
	);
};

export default BoardSquare;
export { correctArray, validArray, invalidArray };
