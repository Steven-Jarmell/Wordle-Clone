import React, { useState } from "react";
import "./App.css";
import Gameboard from "./Components/Gameboard";
import Keyboard from "./Components/Keyboard";
import Navbar from "./Components/Navbar";
import { randomWord } from "./Components/GenerateRandomWord";

const App: React.FC = () => {
	const [currentGuess, setCurrentGuess] = useState<string>("");
	const [guesses, setGuesses] = useState<string[]>([]);

	const addChar = (value: string) => {
		if (currentGuess.length === 5) return;
		setCurrentGuess(`${currentGuess}${value}`);
		console.log(currentGuess);
	};

	const deleteChar = () => {
		setCurrentGuess(currentGuess.slice(0, -1));
	};

	const enterWord = () => {
		if (currentGuess.length < 5) return;
		if (guesses.length < 5) {
			setGuesses([...guesses, currentGuess]);
			setCurrentGuess("");
		}
	};

	return (
		<div className="App">
			<Navbar />
			<Gameboard
				solution={randomWord}
				currentGuess={currentGuess}
				guesses={guesses}
			/>
			<Keyboard
				addChar={addChar}
				deleteChar={deleteChar}
				enterWord={enterWord}
			/>
		</div>
	);
};

export default App;
