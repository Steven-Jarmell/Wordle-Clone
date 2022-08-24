import { useEffect, useState } from "react";
import { IoMdStats } from "react-icons/io";
import { BsFillShareFill } from "react-icons/bs";
import Countdown from "./Countdown";

type Props = {
	showStatistics: boolean;
	setShowStatistics: React.Dispatch<React.SetStateAction<boolean>>;
};

const Statistics = ({ showStatistics, setShowStatistics }: Props) => {
	const [time, setTime] = useState(Date.now());
	useEffect(() => {
		const interval = setInterval(() => setTime(Date.now()), 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className={`statistics-modal-container show-statistics-${showStatistics}`}>
			<div className="statistics-modal">
				<div className="statistics-header">
					<p className="statistics-header-title">
						<b>STATISTICS</b>
					</p>
					<button
						onClick={() => setShowStatistics(false)}
						className="statistics-header-btn"
					>
						x
					</button>
				</div>
				<div className="main-statistics-content">
					<div className="actual-statistics-container">
						<div className="stats">
							<p className="stat-value">0</p>
							<p className="stat-title">Played</p>
						</div>
						<div className="stats">
							<p className="stat-value">0</p>
							<p className="stat-title">Win %</p>
						</div>
						<div className="stats">
							<p className="stat-value">0</p>
							<p className="stat-title">Current Streak</p>
						</div>
						<div className="stats">
							<p className="stat-value">0</p>
							<p className="stat-title">Max Streak</p>
						</div>
					</div>
					<p className="statistics-header-title">GUESS DISTRIBUTION</p>
					<div className="guess-distribution-container">
						No Data
					</div>
					<button className="wrong-stats">
							My stats don't look right {">"}
					</button>
				</div>
                <div className="sign-in-container"></div>
                <div className="statistics-footer">
                    <p>Next Wordle</p>
                    <div className="countdown-container">
                        <Countdown />
                    </div>
                    <button className="share-button">
                        <span>Share</span>
                        <BsFillShareFill />
                    </button>
                </div>
			</div>
		</div>
	);
};

export default Statistics;
