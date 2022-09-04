import React, { useEffect, useState } from "react";
import "./App.css";
import Gameboard from "./Components/Gameboard";
import Keyboard from "./Components/Keyboard";
import Navbar from "./Components/Navbar";
import { getRandomWord } from "./Components/GenerateRandomWord";
import { WORDS } from "./Components/WordList";
import Menu from "./NavComponents/Menu";
import Info from "./NavComponents/Info";
import Statistics from "./NavComponents/Statistics";
import Settings from "./NavComponents/Settings";
import Congradulations from "./Components/Congradulations";
import InvalidWord from "./Components/InvalidWord";
import InvalidLength from "./Components/InvalidLength";

const App: React.FC = () => {
	const userPrefersDark =
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches;

	// Initialize state variables/methods
	const [currentGuess, setCurrentGuess] = useState<string>(
		localStorage.getItem('current-guess') ? String(localStorage.getItem('current-guess')) : ""
	);
	const [guesses, setGuesses] = useState<string[]>(
		localStorage.getItem('guesses') ? String(localStorage.getItem('guesses'))?.split('.') : []
	);
	
	const [gameOver, setGameOver] = useState<boolean>(false);
	const [showColor, setShowColor] = useState<boolean>(false);
	const [toggle, setToggle] = useState<boolean>(false);
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [showInfo, setShowInfo] = useState<boolean>(
		(guesses.length > 0 || currentGuess.length > 0) ? false : true
	);
	const [showStatistics, setShowStatistics] = useState<boolean>(false);
	const [showSettings, setShowSettings] = useState<boolean>(false);
	const [isDarkMode, setIsDarkMode] = useState<boolean>(
		localStorage.getItem('dark-theme') ? localStorage.getItem('dark-theme') === 'true'
		: userPrefersDark ? true : false
	);
	const [isHighContrastMode, setHighContrastMode] = useState<boolean>(
		localStorage.getItem('high-contrast') ? localStorage.getItem('high-contrast') === 'true' : false
	);
	const [randomWord, setRandomWord] = useState<string>(getRandomWord());
	const [resetKeyboard, setResetKeyboard] = useState<boolean>(false);
	const [showCongradulations, setShowCongradulations] = useState<boolean>(false);
	const [toggleInvalidWord, setToggleInvalidWord] = useState<boolean>(false);
	const [toggleInvalidLength, setToggleInvalidLength] = useState<boolean>(false);

	useEffect(() => {
		localStorage.setItem('current-guess', currentGuess);
	}, [currentGuess, setCurrentGuess]);

	useEffect(() => {
		localStorage.setItem('guesses', guesses.join('.'))
	}, [guesses, setGuesses]);

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}

		if (isHighContrastMode) {
			document.documentElement.classList.add("highcontrast");
		} else {
			document.documentElement.classList.remove("highcontrast");
		}
	}, [isDarkMode, isHighContrastMode]);

	const handleDarkMode = (isDark: boolean) => {
		setIsDarkMode(isDark);
		localStorage.setItem('dark-theme', isDark ? 'true' : 'false');
	};

	const handleHighContrastMode = (isHighContrast: boolean) => {
		setHighContrastMode(isHighContrast);
		localStorage.setItem('high-contrast', isHighContrast ? 'true' : 'false');
	};

	/**
	 * Add a char to the current guess
	 * @param value:string character to add
	 * @returns none
	 */
	const addChar = (value: string) => {
		// If the game is over, the current guess is already 5 characters, or the player did not enter a valid letter, do not add to currentGuess
		if (
			gameOver ||
			currentGuess.length === 5 ||
			/^[a-zA-Z]+$/.test(value) === false ||
			value.length > 1
		) {
			return;
		}
		setToggleInvalidLength(false);
		setCurrentGuess(`${currentGuess}${value}`);
	};

	/**
	 * Deletes the last char in the current guess
	 * @returns none
	 */
	const deleteChar = () => {
		// If the game is over, do not remove the current char
		if (gameOver) {
			return;
		}
		setToggleInvalidLength(false);
		setToggleInvalidWord(false);
		setCurrentGuess(currentGuess.slice(0, -1));
	};

	/**
	 * If the player entered a valid word, check if it is correct
	 * If it is correct, let the user know and end the game
	 * If the player runs out of guesses, end the game
	 * @returns none
	 */
	const enterWord = () => {
		// If the game is over or if the current guess is not 5 characters, do not allow enter to run
		if (gameOver) {
			return;
		}
		else if (currentGuess.length < 5) {
			setToggleInvalidLength(true);
			return;
		}
		// If the word entered is not valid, return
		else if (!WORDS.includes(currentGuess.toLowerCase())) {
			setToggleInvalidWord(true);
			return;
		}
		// If we are not on the last guess, show the colors, add the guess to the list of guesses
		// If the guess is correct, let the player know and end the game
		if (guesses.length <= 4) {
			setToggle(!toggle);
			setShowColor(true);
			setGuesses([...guesses, currentGuess]);
			if (currentGuess === randomWord) {
				endGame();
				setShowCongradulations(true);
			}
			setCurrentGuess("");
			
			setShowColor(true);
			// If we are on the last guess, add the guess to the list of guesses and show the colors
			// If the last guess was correct, let the player know they won, else let them know they lost and what the actual word was
		} else if (guesses.length === 5) {
			setGuesses([...guesses, currentGuess]);
			setShowColor(true);
			if (currentGuess === randomWord) {
				endGame();
				setShowCongradulations(true);
			} else {
				alert(`Incorrect. Actual: ${randomWord}`);
			}
			endGame();
		}
	};

	/**
	 * Function to set the game state to over
	 */
	const endGame = () => {
		setGameOver(true);
	};

	const handleReset = () => {
		setRandomWord(getRandomWord());
		setCurrentGuess("");
		setGuesses([]);
		setGameOver(false);
		setResetKeyboard(true);
		setShowCongradulations(false);
	};

	return (
		<>
			<Navbar
				setShowMenu={setShowMenu}
				setShowInfo={setShowInfo}
				setShowStatistics={setShowStatistics}
				setShowSettings={setShowSettings}
			/>
			<div className="game-container">
				<button className="reset-button" onClick={() => handleReset()}>
					Reset
				</button>
				<Gameboard
					solution={randomWord}
					currentGuess={currentGuess}
					guesses={guesses}
					toggle={toggle}
					setShowColor={setShowColor}
					resetKeyboard={resetKeyboard}
					setResetKeyboard={setResetKeyboard}
					toggleInvalidWord={toggleInvalidWord}
					setToggleInvalidWord={setToggleInvalidWord}
					toggleInvalidLength={toggleInvalidLength}
				/>
				<Keyboard
					addChar={addChar}
					deleteChar={deleteChar}
					enterWord={enterWord}
					solution={randomWord}
					guesses={guesses}
					showColor={showColor}
				/>
				<Menu showMenu={showMenu} setShowMenu={() => setShowMenu(false)} />
				<Info showInfo={showInfo} setShowInfo={() => setShowInfo(false)} />
				<Statistics
					showStatistics={showStatistics}
					setShowStatistics={() => setShowStatistics(false)}
				/>
				<Settings
					showSettings={showSettings}
					setShowSettings={() => setShowSettings(false)}
					handleDarkMode={handleDarkMode}
					handleHighContrastMode={handleHighContrastMode}
					isDarkMode={isDarkMode}
					isHighContrastMode={isHighContrastMode}
				/>
				<Congradulations
					showCongradulations={showCongradulations}
					handleReset={handleReset}
				/>
				<InvalidWord show={toggleInvalidWord}/>
				<InvalidLength show={toggleInvalidLength} />
			</div>
		</>
	);
};

export default App;
