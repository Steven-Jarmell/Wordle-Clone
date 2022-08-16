import { WORDS } from "./WordList";

/**
 * Generate a random integer between the provided intervals
 * @param min Lower bound
 * @param max Upper bound
 * @returns Integer between [min, max]
 */
function randomIntFromInterval(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// Generate a random word from the array
let index: number = randomIntFromInterval(0, WORDS.length);
let randomWord: string = WORDS[index].toUpperCase();

export { randomWord };
