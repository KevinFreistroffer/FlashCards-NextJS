"use client";

import { IFlashCard, IQuestion } from "@/_lib/definitions";
import React from "react";
import { shuffle } from "lodash";
import styles from "./styles.module.css";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Card = ({
  data,
  toggleCard,
  setGuesses,
}: {
  data: IFlashCard;
  setGuesses: (guesses: number) => void;
  toggleCard: () => void;
}): JSX.Element => {
  const { question, choices, showAnswer, maxGuesses, guesses } = data;
  const selectAnswer = (choiceIndex: number) => {
    /**
     * so it would set the guesses in the card.
     */
    // if (guesses.includes(choiceIndex)) {
    //   setGuesses((state) => state.filter((item) => item !== choiceIndex));
    // } else {
    //   setGuesses((state) => {
    //     if (maxGuesses === 1) {
    //       return [choiceIndex];
    //     } else {
    //       return [...state, choiceIndex];
    //     }
    //   });
    // }
  };

  return (
    <div
      className={`${styles["flashcard"]} min-h-96 max-h-96 w-full mb-6 overflow-y-auto pt-6 px-10 pb-20`}
      data-testid="flashcard "
    >
      <div>
        <p className="p-question  mb-12 text-2xl" data-testid="question">
          <span className="font-500">{question}</span>
        </p>
        <ul>
          {choices.map(({ choice, correct }, choiceIndex) => {
            return (
              <li
                key={choiceIndex}
                className={`${
                  styles["li-choice"]
                } mb-4 flex items-center cursor-pointer p-2 rounded ${
                  showAnswer
                    ? correct
                      ? "font-semibold"
                      : "line-through text-gray-300"
                    : ""
                }`}
              >
                <input
                  title="guess"
                  type="checkbox"
                  name="guess"
                  id={`guess-${choiceIndex}`}
                  checked={guesses.includes(choiceIndex)}
                  value={choiceIndex}
                  className="w-4 h-4 mr-4 cursor-pointer"
                  onChange={() => setGuesses(choiceIndex)}
                />
                <label
                  className={`${styles["label"]} cursor-pointer`}
                  htmlFor={`guess-${choiceIndex}`}
                >
                  {choice}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Card;
