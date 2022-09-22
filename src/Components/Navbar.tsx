import { AiOutlineMenu, AiOutlineQuestionCircle } from "react-icons/ai";
import { IoMdStats } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import "./styles.css";

type Props = {
	setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
	setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
	setShowStatistics: React.Dispatch<React.SetStateAction<boolean>>;
	setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ setShowMenu, setShowInfo, setShowStatistics, setShowSettings }: Props) => {
	return (
		<div className="navbar">
			<button className="icon menu box" onClick={() => setShowMenu(true)}>
				<AiOutlineMenu />
			</button>
			<h1 className="page-title box">Randle</h1>
			<div className="icons box">
				<button className="icon" onClick={() => setShowInfo(true)}>
					<AiOutlineQuestionCircle />
				</button>
				<button className="icon" onClick={() => setShowStatistics(true)}>
					<IoMdStats />
				</button>
				<button className="icon" onClick={() => setShowSettings(true)}>
					<FiSettings />
				</button>
			</div>
		</div>
	);
};

export default Navbar;
