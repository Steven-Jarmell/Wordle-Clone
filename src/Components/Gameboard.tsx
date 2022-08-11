import BoardRow from "./BoardRow";

type Props = {
	solution: string;
	currentGuess: string;
	guesses: string[];
};

const Gameboard = ({ solution, currentGuess, guesses }: Props) => {
	
	const remainingGuesses = 5 - guesses.length;
	let emptyRows = [];
	//alert(remainingGuesses);
	for (let i = 0; i < remainingGuesses; i++) {
		emptyRows.push("");
	}


	return (
		<div className="gameboard">
			{/* Insert guess rows */}
			{guesses.map((guess, i) => (
				<BoardRow key={i} solution={solution} guess={guess} showColor={true}/>
			))}

			<BoardRow solution={solution} guess={currentGuess} showColor={false}/>

			{emptyRows.map((guess, i) => (
				<BoardRow key={i} solution={solution} guess={guess} showColor={false}/>
			))}
		</div>
	);
};

export default Gameboard;
