import { AiOutlineMenu, AiOutlineQuestionCircle } from "react-icons/ai";
import { IoMdStats } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import "./styles.css";

const Navbar = () => {
	return (
		<div className="navbar">
			<button className="icon menu">
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
