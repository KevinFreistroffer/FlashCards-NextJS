import { EAnswer } from "./enums";

export interface IRoute {
  route: string;
  text: string;
}

export interface IQuestion {
  A: string;
  B: string;
  C?: string;
  D?: string;
  E?: string;
}

export interface IFlashCard {
  question: string;
  choices: { id: number; choice: string; correct: boolean }[];
  showAnswer: boolean;
  maxGuesses: number;
  guesses: number[];
  guessedCorrectly: boolean;
}
