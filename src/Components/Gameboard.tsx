import BoardRow from "./BoardRow";

type Props = {
	solution: string;
	currentGuess: string;
	guesses: string[];
	resetKeyboard: boolean;
	setResetKeyboard: React.Dispatch<React.SetStateAction<boolean>>;
	toggleInvalidWord: boolean;
	setToggleInvalidWord: React.Dispatch<React.SetStateAction<boolean>>;
	toggleInvalidLength: boolean;
};

const Gameboard = ({
	solution,
	currentGuess,
	guesses,
	resetKeyboard,
	setResetKeyboard,
	toggleInvalidWord,
	setToggleInvalidWord,
	toggleInvalidLength
}: Props) => {
	const remainingGuesses = 5 - guesses.length;

	// Create empty rows array for the leftover slots
	let emptyRows = [];
	for (let i = 0; i < remainingGuesses; i++) {
		emptyRows.push("");
	}

	/**
	 * Function used to determine which board to render
	 * @returns true if number of guesses is <= 5, else false
	 */
	let showRow = () => {
		return guesses.length <= 5;
	};

	// If the gameboard is not full, show the previous guesses, current guess, and remaining rows
	// Else, simply render the guess array
	return (
		<div className="gameboard">
			{guesses.map((guess, i) => (
				<BoardRow
					key={i}
					solution={solution}
					guess={guess}
					showColor={true}
					resetKeyboard={resetKeyboard}
					setResetKeyboard={setResetKeyboard}
				/>
			))}

			{showRow() && (
				<BoardRow
					solution={solution}
					guess={currentGuess}
					showColor={false}
					resetKeyboard={resetKeyboard}
					setResetKeyboard={setResetKeyboard}
					toggleInvalidWord={toggleInvalidWord}
					setToggleInvalidWord={setToggleInvalidWord}
					toggleInvalidLength={toggleInvalidLength}
				/>
			)}

			{emptyRows.map((guess, i) => (
				<BoardRow
					key={i}
					solution={solution}
					guess={guess}
					showColor={false}
					resetKeyboard={resetKeyboard}
				/>
			))}
		</div>
	);
};

export default Gameboard;
