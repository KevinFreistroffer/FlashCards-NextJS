"use client";

import { IFlashCard, IQuestion } from "@/lib/definitions";
import React, { useEffect } from "react";
import { shuffle } from "lodash";
import styles from "./styles.module.css";
import Checkbox from "@mui/material/Checkbox";
import { EContinueButtonState } from "./FlashCards";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Card = ({
  data,
  setGuesses,
  continueButtonState,
}: {
  data: IFlashCard;
  continueButtonState: EContinueButtonState;
  setGuesses: (guesses: number) => void;
}): JSX.Element => {
  const {
    question,
    choices,
    showAnswer,
    maxGuesses,
    guesses,
    guessedCorrectly,
  } = data;
  const [reveal, setReveal] = React.useState(true);
  const showRevealButton = false;
  // useEffect(() => {
  //   setReveal(false);
  // }, [question]);

  return (
    <div
      className={`${styles["flashcard"]}  w-full mb-6 overflow-y-auto pt-6 px-10 pb-20`}
      data-testid="flashcard "
    >
      <div>
        <p className="p-question  mb-12 text-2xl" data-testid="question">
          <span className="font-500">{question}</span>
        </p>
        {showRevealButton && (
          <button
            type="button"
            className="w-full border rounded p-3 text-center my-10 bg-green-500 text-white pointer hover:bg-black-600"
            onClick={() => setReveal(!reveal)}
          >
            Reveal
          </button>
        )}
        {reveal && (
          <ul>
            {choices.map(
              (
                { choice, correct: isACorrectChoice, id: choiceId },
                choiceIndex
              ) => {
                return (
                  <li
                    key={choiceIndex}
                    className={`${styles["li-choice"]} ${
                      showAnswer
                        ? isACorrectChoice
                          ? styles["correct-choice"]
                          : styles["incorrect-choice"]
                        : ""
                    } mb-4 flex items-center cursor-pointer p-2 hover:bg-gray-100 ${
                      showAnswer
                        ? isACorrectChoice
                          ? "font-semibold "
                          : ""
                        : ""
                    }`}
                  >
                    <input
                      title="guess"
                      type="checkbox"
                      name="guess"
                      id={`guess-${choiceId}`}
                      checked={guesses.includes(choiceId)}
                      value={choiceId}
                      className="w-4 h-4 mr-4 cursor-pointer"
                      onChange={() => {
                        // Only enables selecting choices if the answers haven't been "submitted".
                        // There's no "retry".
                        if (!showAnswer) {
                          setGuesses(choiceId);
                        }
                      }}
                    />
                    <label
                      className={`${styles["label"]} cursor-pointer`}
                      htmlFor={`guess-${choiceId}`}
                    >
                      {choice}
                    </label>
                  </li>
                );
              }
            )}
            {showAnswer ? (
              guessedCorrectly ? (
                <li
                  className={`text-center flex flex-col justify-center items-center bg-gray-100 p-6`}
                >
                  <span
                    className={`${styles["correct-feedback feedback"]} flex flex-col justify-center items-center w-8 h-8 text-center border p-8 rounded-full mb-3`}
                  >
                    <i className="fa fa-check"></i>
                  </span>{" "}
                  <span className="text-sm">Correct</span>
                </li>
              ) : (
                <li
                  className={`text-center flex flex-col justify-center items-center justify-center mt-10 bg-gray-100 p-6`}
                >
                  <span
                    className={`${styles["incorrect-feedback feedback"]} flex flex-col justify-center items-center w-8 h-8 text-center border p-8 rounded-full mb-3`}
                  >
                    <i
                      className={`${styles["feedback-icon"]} fa fa-xmark text-3xl `}
                    ></i>
                  </span>{" "}
                  <span className="text-sm">Incorrect</span>
                </li>
              )
            ) : null}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Card;
