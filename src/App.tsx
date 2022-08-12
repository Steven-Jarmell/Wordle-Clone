import React, { useState } from "react";
import "./App.css";
import Gameboard from "./Components/Gameboard";
import Keyboard from "./Components/Keyboard";
import Navbar from "./Components/Navbar";
import { randomWord } from "./Components/GenerateRandomWord";
import { WORDS } from "./Components/WordList";

const App: React.FC = () => {
	const [currentGuess, setCurrentGuess] = useState<string>("");
	const [guesses, setGuesses] = useState<string[]>([]);
	const [gameOver, setGameOver] = useState<boolean>(false);
	const [showColor, setShowColor] = useState<boolean>(false);

	const addChar = (value: string) => {
		if (gameOver) return;
		if (currentGuess.length === 5) return;
		if (/^[a-zA-Z]+$/.test(value) === false) return;
		setCurrentGuess(`${currentGuess}${value}`);
		console.log(currentGuess);
	};

	const deleteChar = () => {
		if (gameOver) return;
		setCurrentGuess(currentGuess.slice(0, -1));
	};

	const enterWord = () => {
		if (gameOver) return;
		else if (currentGuess.length < 5) return;
		else if (!WORDS.includes(currentGuess.toLowerCase())) {
			alert("Invalid word");
			return;
		}
		if (guesses.length <= 4) {
			setShowColor(true);
			console.log(guesses.length);
			// Call method to check last row
			setGuesses([...guesses, currentGuess]);
			if (currentGuess === randomWord) {
				alert("Correct");
				endGame();
			} else {
				//alert(`Incorrect. Entered: ${currentGuess} Actual: ${randomWord}`);
			}
			setCurrentGuess("");
		} else if (guesses.length === 5) {
			setGuesses([...guesses, currentGuess]);
			setShowColor(true);
			if (currentGuess === randomWord) {
				alert("Correct");
				endGame();
			} else {
				alert(`Incorrect. Entered: ${currentGuess} Actual: ${randomWord}`);
			}
		}
	};

	const endGame = () => {
		setGameOver(true);
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
				solution={randomWord}
				guesses={guesses}
				showColor={showColor}
			/>
		</div>
	);
};

export default App;
