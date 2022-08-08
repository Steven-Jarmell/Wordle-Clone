import React from 'react';
import './styles.css';

type Props = {
    letter: string;
};

const BoardSquare = ({ letter }: Props) => {
    return (
        <p className="board-square">{letter}</p>
    )
}

export default BoardSquare;