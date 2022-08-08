import React from "react";
import Button from "./KeyboardBlock";
import './styles.css';

const Keyboard = () => {
	const line1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
	const line2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
	const line3 = ["Z", "X", "C", "V", "B", "N", "M"];

	return (
		<div className="keyboard-container">
            <div className="keyboard-line">
                {line1.map((key) => (
                    <Button letter={key} />
                ))}
            </div>
            <div className="keyboard-line">
                {line2.map((key) => (
                    <Button letter={key} />
                ))}
            </div>
            <div className="keyboard-line">
                <Button letter={"ENTER"} />
                {line3.map((key) => (
                    <Button letter={key} />
                ))}
                <Button letter={"BACK"} />
            </div>
		</div>
	);
};

export default Keyboard;
