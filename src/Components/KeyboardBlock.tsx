import "./styles.css";
import { TiBackspaceOutline } from "react-icons/ti";
import { correctArray, validArray, invalidArray } from "./BoardSquare";

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
	) : correctArray.includes(letter) ? (
		<button onClick={() => addChar(letter)} className="letter correct-letter-space">
			{letter}
		</button>
	) : validArray.includes(letter) ? (
		<button onClick={() => addChar(letter)} className="letter valid-letter">
			{letter}
		</button>
	) : invalidArray.includes(letter) ? (
		<button onClick={() => addChar(letter)} className="letter invalid-letter">
			{letter}
		</button>
	) : (
		<button onClick={() => addChar(letter)} className="letter">
			{letter}
		</button>
	);
};

export default Button;
