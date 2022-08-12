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

	let showRow = () => {
		return (guesses.length < 6);
	}

	return showRow() ? (
		<div className="gameboard">
			
			{guesses.map((guess, i) => (
				<BoardRow key={i} solution={solution} guess={guess} showColor={true}/>
			))}

			<BoardRow solution={solution} guess={currentGuess} showColor={false}/>

			{emptyRows.map((guess, i) => (
				<BoardRow key={i} solution={solution} guess={guess} showColor={false}/>
			))}
		</div>
	) : (
		<div className="gameboard">
			{guesses.map((guess, i) => (
				<BoardRow key={i} solution={solution} guess={guess} showColor={true}/>
			))}
		</div>
	);
};

export default Gameboard;
