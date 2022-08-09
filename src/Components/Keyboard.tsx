import { useEffect } from "react";
import Button from "./KeyboardBlock";
import "./styles.css";

type Props = {
	onChar: (value: string) => void;
};

const Keyboard = ({ onChar }: Props) => {
	const line1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
	const line2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
	const line3 = ["Z", "X", "C", "V", "B", "N", "M"];

	const onClick = (value: string) => {
		onChar(value);
	};

	useEffect(() => {
		const listener = (e: KeyboardEvent) => {
			const key = e.key;
			/*
			if (key.length === 1 && key >= "A" && key <= "Z") {
				console.log("calling onChar");
                onChar(key);
			}
            */
            console.log("calling onChar");
            onChar(key);
		};

        window.addEventListener('keyup', listener);
        return () => {
            window.removeEventListener('keyup', listener);
        }

	}, [onChar]);

	return (
		<div className="keyboard-container">
			<div className="keyboard-line">
				{line1.map((key, i) => (
					<Button key={i} letter={key} onClick={onClick}/>
				))}
			</div>
			<div className="keyboard-line">
				{line2.map((key, i) => (
					<Button key={i} letter={key} onClick={onClick}/>
				))}
			</div>
			<div className="keyboard-line">
				<Button letter={"ENTER"} onClick={onClick}/>
				{line3.map((key, i) => (
					<Button key={i} letter={key} onClick={onClick} />
				))}
				<Button letter={"BACK"} onClick={onClick}/>
			</div>
		</div>
	);
};

export default Keyboard;
