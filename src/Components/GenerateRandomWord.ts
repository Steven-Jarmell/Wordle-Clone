import { WORDS } from "./WordList";

/**
 * Generate a random integer between the provided intervals
 * @param min Lower bound
 * @param max Upper bound
 * @returns Integer between [min, max]
 */
function randomIntFromInterval(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// Generate a random word from the array
function getRandomWord(): string {
	let index: number = randomIntFromInterval(0, WORDS.length);
	let randomWord: string = WORDS[index].toUpperCase();
	localStorage.setItem('current-word', randomWord);
	return randomWord;
}

export { getRandomWord };
