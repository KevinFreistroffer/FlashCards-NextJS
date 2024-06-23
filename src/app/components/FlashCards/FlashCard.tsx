import { IFlashCard, IQuestion } from "@/_lib/definitions";
import React from "react";
import { shuffle } from "lodash";
import styles from "./styles.module.css";

export const Card = ({ data }: { data: IFlashCard }): JSX.Element => {
  const { question, choices, showAnswer } = data;
  const shuffledChoices = shuffle(choices);

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
          {shuffledChoices.map(({ choice, correct }, choiceIndex) => {
            return (
              <li
                key={choiceIndex}
                className={`li-choice mb-4 ${
                  showAnswer
                    ? correct
                      ? "font-semibold"
                      : "line-through text-gray-300"
                    : ""
                }`}
              >
                {choiceIndex == 0
                  ? "A: "
                  : choiceIndex === 1
                  ? "B: "
                  : choiceIndex === 2
                  ? "C: "
                  : choiceIndex === 3
                  ? "D: "
                  : "E: "}
                {choice}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Card;
