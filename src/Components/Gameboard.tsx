import React from 'react';
import BoardRow from './BoardRow';

type Props = {
    solution: string;
    currentGuess: string;
    guesses: string[];
}

const Gameboard = ({solution, currentGuess, guesses}:Props) => {

    return (
        <div className="gameboard">
            {guesses.map((guess, i) => (
                <BoardRow 
                    key={i}
                    solution={solution}
                    guess={guess}
                />
            ))}

        </div>
    );
};

export default Gameboard;