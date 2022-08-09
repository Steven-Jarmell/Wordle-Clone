import BoardRow from "./BoardRow";

type Props = {
	solution: string;
	currentGuess: string;
	guesses: string[];
};

const Gameboard = ({ solution, currentGuess, guesses }: Props) => {
	/*
    const myClonedArray = [];
    guesses.forEach(val => myClonedArray.push(Object.assign({}, val)));
    while (myClonedArray.length < 5) {
        myClonedArray.push('');
    }
    */
	const remainingGuesses = 6 - guesses.length - 1;
	const emptyRows = [];
	for (let i = 0; i < remainingGuesses; i++) {
		emptyRows.push("");
	}

	return (
		<div className="gameboard">
			{/* Insert guess rows */}
			{guesses.map((guess, i) => (
				<BoardRow key={i} solution={solution} guess={guess} />
			))}

			<BoardRow solution={solution} guess={currentGuess} />

			{emptyRows.map((guess, i) => (
				<BoardRow key={i} solution={solution} guess={guess} />
			))}
		</div>
	);
};

export default Gameboard;
