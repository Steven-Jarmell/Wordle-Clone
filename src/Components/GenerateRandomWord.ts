import { WORDS } from "./WordList";

function randomIntFromInterval(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

let index: number = randomIntFromInterval(0, WORDS.length);
let randomWord: string = WORDS[index].toUpperCase();

export { randomWord };
