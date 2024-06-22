import React from "react";
import { IFlashCard, IQuestion } from "./FlashCards";

const Question = ({
  data,
  questionNumber,
  numOfQuestions,
}: {
  data: IFlashCard;
  questionNumber: number;
  numOfQuestions: number;
}): JSX.Element => {
  const { question, choices, answer, showAnswer } = data;

  return (
    <div>
      <p className="font-bold mr-3 mb-6 text-gray-400">
        {`${questionNumber}/${numOfQuestions}`}
      </p>
      <ul>
        <li className="li-question  mb-12 text-2xl">
          <span className="font-500">{question}</span>
        </li>
        {Object.keys(choices).map((key, i) => {
          return (
            <li
              key={i}
              className={`li-choice mb-3 ${
                showAnswer
                  ? answer.find((a) => a === (key as keyof IQuestion))
                    ? ""
                    : "line-through" + " opacity-50"
                  : ""
              }`}
            >
              {i == 0
                ? "A: "
                : i === 1
                ? "B: "
                : i === 2
                ? "C: "
                : i === 3
                ? "D: "
                : "E: "}
              {choices[key as keyof IQuestion]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Question;
