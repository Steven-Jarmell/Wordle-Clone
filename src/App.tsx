import React, { useState } from "react";
import "./App.css";
import Gameboard from "./Components/Gameboard";
import Keyboard from "./Components/Keyboard";
import Navbar from "./Components/Navbar";
import { randomWord } from "./Components/GenerateRandomWord";

const App: React.FC = () => {
	const [currentGuess, setCurrentGuess] = useState<string>("");
	const [guesses, setGuesses] = useState<string[]>(['', '','','','','']);

	const onChar = (value: string) => {
		setCurrentGuess(`${currentGuess}${value}`);
		console.log(currentGuess);
	};

	return (
		<div className="App">
			<Navbar />
			<Gameboard
				solution={randomWord}
				currentGuess={currentGuess}
				guesses={guesses}
			/>
			<Keyboard onChar={onChar} />
		</div>
	);
};

export default App;
