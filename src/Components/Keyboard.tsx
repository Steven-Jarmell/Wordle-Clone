import { useEffect } from "react";
import Button from "./KeyboardBlock";
import "./styles.css";

type Props = {
	addChar: (value: string) => void;
	deleteChar: () => void;
	enterWord: () => void;
	solution: string;
	guesses: string[];
	showColor: boolean;
};

const Keyboard = ({ addChar, deleteChar, enterWord }: Props) => {
	const line1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
	const line2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
	const line3 = ["Z", "X", "C", "V", "B", "N", "M"];

	// Hook to listen for keyboard inputs and then add/delete/enter depending on the input
	useEffect(() => {
		const listener = (e: KeyboardEvent) => {
			let key: string = e.key;
			if (key === "Backspace") {
				deleteChar();
			} else if (key === "Enter") {
				enterWord();
			} else {
				addChar(key.toUpperCase());
			}
		};

		window.addEventListener("keyup", listener);

		return () => {
			window.removeEventListener("keyup", listener);
		};
	}, [addChar, deleteChar, enterWord]);

	//Generate keyboard display for each row
	return (
		<div className="keyboard-container">
			<div className="keyboard-line">
				{line1.map((key, i) => (
					<Button
						key={i}
						letter={key}
						addChar={addChar}
						deleteChar={deleteChar}
						enterWord={enterWord}
					/>
				))}
			</div>
			<div className="keyboard-line">
				{line2.map((key, i) => (
					<Button
						key={i}
						letter={key}
						addChar={addChar}
						deleteChar={deleteChar}
						enterWord={enterWord}
					/>
				))}
			</div>
			<div className="keyboard-line">
				<Button
					letter={"ENTER"}
					addChar={addChar}
					deleteChar={deleteChar}
					enterWord={enterWord}
				/>
				{line3.map((key, i) => (
					<Button
						key={i}
						letter={key}
						addChar={addChar}
						deleteChar={deleteChar}
						enterWord={enterWord}
					/>
				))}
				<Button
					letter={"Back"}
					addChar={addChar}
					deleteChar={deleteChar}
					enterWord={enterWord}
				/>
			</div>
		</div>
	);
};

export default Keyboard;
