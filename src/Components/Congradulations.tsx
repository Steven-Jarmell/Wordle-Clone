type Props = {
    showCongradulations: boolean;
    handleReset: () => void;
}

let Congradulations = ({ showCongradulations, handleReset }: Props) => {
    return (
        <div className={`congradulations-modal-container show-congradulations-${showCongradulations}`}>
			<div className="congradulations-modal">
                <h1>You got it!</h1>
                <button onClick={() => handleReset()} className="congradulations-button">New Game</button>
            </div>
		</div>
    );
};

export default Congradulations;