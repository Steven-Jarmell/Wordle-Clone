import BoardSquare from "./BoardSquare";

type Props = {
	solution: string;
	guess: string;
	showColor: boolean;
	toggle: boolean;
	setShowColor: React.Dispatch<React.SetStateAction<boolean>>;
	resetKeyboard: boolean;
	setResetKeyboard: React.Dispatch<React.SetStateAction<boolean>>;
	toggleInvalid?: boolean;
	setToggleInvalid?: React.Dispatch<React.SetStateAction<boolean>>;
};

const BoardRow = ({ solution, guess, showColor, toggle, setShowColor, resetKeyboard, setResetKeyboard, toggleInvalid, setToggleInvalid }: Props) => {
	// If the current guess is empty, initialize the cells to empty, otherwise initialize cells to an array of chars
	const cells = guess === "" ? ["", "", "", "", ""] : guess.split("");

	// Add blank characters if the current guess is not length 5
	while (cells.length < 5) {
		cells.push("");
	}

	return (
		<div className={`board-row invalid-${toggleInvalid}`}>
			{cells.map((c, i) => (
				<BoardSquare
					key={i}
					listID={i}
					letter={c}
					solution={solution}
					showColor={showColor}
					guess={guess}
					toggle={toggle}
					setShowColor={setShowColor}
					resetKeyboard = {resetKeyboard}
					setResetKeyboard = {setResetKeyboard}
				/>
			))}
		</div>
	);
};

export default BoardRow;
