import "./styles.css";
import { GiAbstract050, GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { FaRobot } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { BsHeart } from "react-icons/bs";

type Props = {
	showMenu: boolean;
	setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu = ({ showMenu, setShowMenu }: Props) => {
	return (
		<div className= {`menu-modal show-menu-${showMenu}`} >
			<div className="menu-header">
				<h1>Menu</h1>
				<button onClick={() => setShowMenu(false)} className="menu-exit-btn">
					x
				</button>
			</div>
			<div className="menu-features">
				<h2>More features</h2>
				<div className="features">
					<div className="feature">
						<GiAbstract050 />
						Daily Wordle (Under Construction)
					</div>
					<div className="feature">
						<GiPerspectiveDiceSixFacesRandom /> 
                        Random Wordle
					</div>
					<div className="feature">
						<FaRobot /> 
                        Play Versus Bot (Under Construction)
					</div>
					<div className="feature">
						<MdGroups /> 
                        Group Stats (Under Construction)
					</div>
                    <div className="feature">
						<BsHeart /> 
                        Hi Annie
					</div>
				</div>
			</div>
			<div className="menu-footer">Made By Steven Jarmell 2022</div>
		</div>
	);
};
export default Menu;
