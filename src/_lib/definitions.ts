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
  choices: IQuestion;
  answer: EAnswer[];
  showAnswer: boolean;
}
