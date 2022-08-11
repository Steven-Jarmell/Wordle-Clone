import React from "react";
import "./styles.css";
import { TiBackspaceOutline } from "react-icons/ti";

type Props = {
	letter: string;
	addChar: (value: string) => void;
	deleteChar: () => void;
	enterWord: () => void;
};

const Button = ({ letter, addChar, deleteChar, enterWord }: Props) => {
	return letter === "Back" ? (
		<button onClick={() => deleteChar()} className="letter backspace">
			<TiBackspaceOutline />
		</button>
	) : letter === "Enter" ? (
		<button onClick={() => enterWord()} className="letter enter">
			{letter}
		</button>
	) : (
		<button onClick={() => addChar(letter)} className="letter">
			{letter}
		</button>
	);
};

export default Button;
