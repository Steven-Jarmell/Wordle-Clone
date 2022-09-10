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
		<button onClick={(e) => {deleteChar(); e.currentTarget.blur()}} className="letter backspace">
			<TiBackspaceOutline />
		</button>
	) : letter === "ENTER" ? (
		<button onClick={(e) => {enterWord(); e.currentTarget.blur()}} className="letter enter">
			{letter}
		</button>
	) : (
		<button
			onClick={() => addChar(letter)}
			className={`letter revealkey ${
				correctArray.includes(letter)
					? "correct-letter-space"
					: validArray.includes(letter)
					? "valid-letter"
					: invalidArray.includes(letter)
					? "invalid-letter"
					: ""
			}`}
		>
			{letter}
		</button>
	);
};

export default Button;
