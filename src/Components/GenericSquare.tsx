import "./styles.css";

type Props = {
	letter: string;
	color: string;
};

const GenericSquare = ({ letter, color }: Props) => {

	/**
	 * Logic for determining the color of the board square
	 * If its in the correct index -> color it green
	 * If its in the solution but not in the right index -> color it yellow.
	 * Also color it yellow if the solution has more than one of the char and the other is not in the right position
	 * If its not in the solution -> color is gray
	 * Also color it gray if it is in the solution but the guess has > 1 of the char and the the solution only has one of the char
	 */
	return (
		<div className={`board-square noselect ${color} revealing`} >
			{letter}
		</div>
	);
};

export default GenericSquare;