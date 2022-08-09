import React from 'react';
import './styles.css';
import { TiBackspaceOutline } from 'react-icons/ti';

type Props = {
    letter: string;
    onClick: (value: string) => void;
};

const Button = ({ letter, onClick }: Props) => {

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        onClick(letter);
    }
    return (
        (letter === "BACK") ? <p className="letter backspace"><TiBackspaceOutline /></p> : <p className="letter">{letter}</p>
    )
}

export default Button;