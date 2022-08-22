import { AiOutlineMenu, AiOutlineQuestionCircle } from "react-icons/ai";
import { IoMdStats } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import "./styles.css";

type Props = {
	setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({setShowMenu}: Props) => {
	return (
		<div className="navbar">
			<button className="icon menu" onClick={() => setShowMenu(true)}>
				<AiOutlineMenu />
			</button>
			<h1 className="page-title">Wordle</h1>
			<div className="icons">
				<button className="icon">
					<AiOutlineQuestionCircle />
				</button>
				<button className="icon">
					<IoMdStats />
				</button>
				<button className="icon">
					<FiSettings />
				</button>
			</div>
		</div>
	);
};

export default Navbar;
