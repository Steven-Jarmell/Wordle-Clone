import "./styles.css";

type Props = {
	letter: string;
};

const BoardSquare = ({ letter }: Props) => {
	return <p className="board-square noselect">{letter}</p>;
};

export default BoardSquare;
