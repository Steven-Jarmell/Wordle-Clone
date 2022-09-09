import "./styles.css";

type Props = {
	letter: string;
	solution: string;
	showColor: boolean;
	listID: number;
	guess: string;
	resetKeyboard: boolean;
	setResetKeyboard?: React.Dispatch<React.SetStateAction<boolean>>;
};

// Create arrays for easy keyboard coloring
let correctArray: string[] = [];
let validArray: string[] = [];
let invalidArray: string[] = [];

const BoardSquare = ({
	letter,
	solution,
	showColor,
	listID,
	guess,
	resetKeyboard,
	setResetKeyboard,
}: Props) => {
	// Clear the arrays if user clicks reset
	if (resetKeyboard === true) {
		correctArray = [];
		validArray = [];
		invalidArray = [];
		setResetKeyboard?.(false);
	}

	let solutionArray = solution.split("");
	let guessArray = guess.split("");

	// Function which gets the color of the square we are currently on
	let getColor = () => {
		// If the letter is in the correct space, return
		if (solutionArray[listID] === letter) {
			correctArray.push(letter);
			return "correct-letter-space";
		}

		let wrongSpot = 0;
		let wrongLetter = 0;
		for (let i = 0; i < solutionArray.length; i++) {
			// If the letter is in the solution array and is not in the correct position increase count
			if (solutionArray[i] === letter && guessArray[i] !== letter) {
				wrongSpot++;
			}

			// If the letter is not in the solution, increment count to deal with multiple of the same letter
			if (
				i <= listID &&
				solutionArray[i] !== letter &&
				guessArray[i] === letter
			) {
				wrongLetter++;
			}

			// When we get to the index of the letter we are testing
			// If the letter has not occured yet in the solution array or in the guess array, its wrong
			// If the letter has occured in the guess array, but is greater than the number of wrong letters, its wrong
			// If the letter has occured in the guess array but is less than the number of wrong letters, its valid
			if (i >= listID) {
				if (wrongLetter === 0) {
					break;
				}
				if (wrongLetter <= wrongSpot) {
					validArray.push(letter);
					return "valid-letter";
				}
			}
		}

		// If the letter is not in the solution array return
		invalidArray.push(letter);
		return "invalid-letter";
	};

	// Render the board square with the given color
	return showColor ? (
		<div
			className={`board-square noselect ${getColor()} column${listID} revealing`}
		>
			{letter}
		</div>
	) : (
		<div className={`board-square noselect`}> {letter} </div>
	);
};

export default BoardSquare;
export { correctArray, validArray, invalidArray };
