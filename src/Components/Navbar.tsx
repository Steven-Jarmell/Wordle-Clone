import { AiOutlineMenu, AiOutlineQuestionCircle } from "react-icons/ai";
import { IoMdStats } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import "./styles.css";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="icons">
				<AiOutlineMenu />
			</div>
			<h1 className="page-title">Wordle</h1>
			<div className="icons">
				<AiOutlineQuestionCircle />
				<IoMdStats />
				<FiSettings />
			</div>
		</div>
	);
};

export default Navbar;
