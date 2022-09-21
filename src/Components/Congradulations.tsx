type Props = {
    showCongradulations: boolean;
    setShowCongradulations: React.Dispatch<React.SetStateAction<boolean>>;
    handleReset: () => void;
}

let Congradulations = ({ showCongradulations, setShowCongradulations, handleReset }: Props) => {
    return (
        <div className={`congradulations-modal-container show-congradulations-${showCongradulations}`}>
			<div className="congradulations-modal">
                <div className="congradulations-modal-header">
                    <h1>You got it!</h1>
                    <button className="congradulations-close-button" onClick={() => setShowCongradulations(false)}>X</button>
                </div>
                <button onClick={() => handleReset()} className="congradulations-button">New Game</button>
            </div>
		</div>
    );
};

export default Congradulations;