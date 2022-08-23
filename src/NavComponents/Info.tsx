import { SetStateAction } from "react";
import { IoMdStats } from "react-icons/io";
import GenericSquare from "../Components/GenericSquare";

type Props = {
	showInfo: boolean;
	setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
};

const Info = ({ showInfo, setShowInfo }: Props) => {
    return (
        <div className={`info-modal-container show-info-${showInfo}`}>
            <div className="info-modal">
                <div className="info-header">
                    <p className="info-header-title"><b>HOW TO PLAY</b></p>
                    <button onClick={() => setShowInfo(false)}className="info-header-btn">x</button>
                </div>
                <div className="info-rules">
                    <p>Guess the <b>WORDLE</b> in 6 tries.</p>
                    <p>Each guess must be a valid 5-letter word. Hit the enter button to submit.</p>
                    <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
                </div>
                <div className="info-examples">
                    <p>Examples</p>
                    <div className="info-example">
                        <div className="letters">
                            <GenericSquare letter="W" color="correct-letter-space" />
                            <GenericSquare letter="E" color="" />
                            <GenericSquare letter="A" color="" />
                            <GenericSquare letter="R" color="" />
                            <GenericSquare letter="Y" color="" />
                        </div>
                        <p>The letter <b>W</b> is in the word and in the correct spot.</p>
                    </div>
                    <div className="info-example">
                        <div className="letters">
                            <GenericSquare letter="P" color="" />
                            <GenericSquare letter="I" color="valid-letter" />
                            <GenericSquare letter="L" color="" />
                            <GenericSquare letter="L" color="" />
                            <GenericSquare letter="S" color="" />
                        </div>
                        <p>The letter <b>W</b> is in the word and in the correct spot.</p>
                    </div>
                    <div className="info-example">
                        <div className="letters">
                            <GenericSquare letter="V" color="" />
                            <GenericSquare letter="A" color="" />
                            <GenericSquare letter="G" color="" />
                            <GenericSquare letter="U" color="invalid-letter" />
                            <GenericSquare letter="E" color="" />
                        </div>
                        <p>The letter <b>W</b> is in the word and in the correct spot.</p>
                    </div>
                </div>
                <div className="info-more-info">
                    <p><b>A new WORDLE will be available each day!</b></p>
                    <p>Never miss a Wordle. <b><u>Sign up</u></b> for our daily reminder email.</p>
                </div>
                <div className="info-login">
                    <div className="stats-icon"><IoMdStats /></div>
                    <div className="info-login-text">
                        <p>Looking to load your saved stats?</p>
                        <p><b><u>Log in here</u></b></p>
                    </div>
                    <p className="info-arrow">{'>'}</p>
                </div>
            </div>
        </div>
    );
}

export default Info;