import React from 'react';
import './styles.css';
import { TiBackspaceOutline } from 'react-icons/ti';

type Props = {
    letter: string;
};

const Button = ({ letter }: Props) => {
    return (
        (letter === "BACK") ? <p className="letter backspace"><TiBackspaceOutline /></p> : <p className="letter">{letter}</p>
    )
}

export default Button;