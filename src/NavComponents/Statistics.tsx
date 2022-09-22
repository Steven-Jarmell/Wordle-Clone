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

	let freq1 = localStorage.getItem('guess-rate-1') ? Number(localStorage.getItem('guess-rate-1')) : 0;
	let freq2 = localStorage.getItem('guess-rate-2') ? Number(localStorage.getItem('guess-rate-2')) : 0;
	let freq3 = localStorage.getItem('guess-rate-3') ? Number(localStorage.getItem('guess-rate-3')) : 0;
	let freq4 = localStorage.getItem('guess-rate-4') ? Number(localStorage.getItem('guess-rate-4')) : 0;
	let freq5 = localStorage.getItem('guess-rate-5') ? Number(localStorage.getItem('guess-rate-5')) : 0;
	let freq6 = localStorage.getItem('guess-rate-6') ? Number(localStorage.getItem('guess-rate-6')) : 0;

	let freqArray: number[] = [freq1, freq2, freq3, freq4, freq5, freq6];
	let sortedArray: number[] = freqArray.sort((n1, n2) => n1 - n2);

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
					{gamesPlayed > 0 ? (
					<div className="guess-distribution-container">
						<div className='guess-line'>
							<p>1</p>
							<p className='guess-bar' style={{"width": `${freq1 > 0 ? ((sortedArray.indexOf(freq1)/5) * 100) : 10}%`}}>{localStorage.getItem('guess-rate-1') ? localStorage.getItem('guess-rate-1') : 0}</p>
						</div>
						<div className='guess-line'>
							<p>2</p>
							<p className='guess-bar' style={{"width": `${freq2 > 0 ? ((sortedArray.indexOf(freq2)/5) * 100) : 10}%`}}>{localStorage.getItem('guess-rate-2') ? localStorage.getItem('guess-rate-2') : 0}</p>
						</div>
						<div className='guess-line'>
							<p>3</p>
							<p className='guess-bar' style={{"width": `${freq3 > 0 ? ((sortedArray.indexOf(freq3)/5) * 100) : 10}%`}}>{localStorage.getItem('guess-rate-3') ? localStorage.getItem('guess-rate-3') : 0}</p>
						</div>
						<div className='guess-line'>
							<p>4</p>
							<p className='guess-bar' style={{"width": `${freq4 > 0 ? ((sortedArray.indexOf(freq4)/5) * 100) : 10}%`}}>{localStorage.getItem('guess-rate-4') ? localStorage.getItem('guess-rate-4') : 0}</p>
						</div>
						<div className='guess-line'>
							<p>5</p>
							<p className='guess-bar' style={{"width": `${freq5 > 0 ? ((sortedArray.indexOf(freq5)/5) * 100) : 10}%`}}>{localStorage.getItem('guess-rate-5') ? localStorage.getItem('guess-rate-5') : 0}</p>
						</div>
						<div className='guess-line'>
							<p>6</p>
							<p className='guess-bar' style={{"width": `${freq6 > 0 ? ((sortedArray.indexOf(freq6)/5) * 100) : 10}%`}}>{localStorage.getItem('guess-rate-6') ? localStorage.getItem('guess-rate-6') : 0}</p>
						</div>
					</div>) : (<div className="guess-distribution-container">No Data</div>)}
					<button className="wrong-stats">
							My stats don't look right {">"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Statistics;
