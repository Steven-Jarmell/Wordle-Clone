import { useEffect, useState } from "react";
import { BsFillShareFill } from "react-icons/bs";
import Countdown from "./Countdown";

type Props = {
	showStatistics: boolean;
	setShowStatistics: React.Dispatch<React.SetStateAction<boolean>>;
	gamesPlayed: number;
	wins: number;
	currentStreak: number;
	maxStreak: number;
};

const Statistics = ({ showStatistics, setShowStatistics, gamesPlayed, wins, currentStreak, maxStreak }: Props) => {
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
							<p className="stat-value">{gamesPlayed}</p>
							<p className="stat-title">Played</p>
						</div>
						<div className="stats">
							<p className="stat-value">{(wins > 0) ? Math.floor((wins / gamesPlayed) * 100) : 0}</p>
							<p className="stat-title">Win %</p>
						</div>
						<div className="stats">
							<p className="stat-value">{currentStreak}</p>
							<p className="stat-title">Current Streak</p>
						</div>
						<div className="stats">
							<p className="stat-value">{maxStreak}</p>
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
                </div>
			</div>
		</div>
	);
};

export default Statistics;
