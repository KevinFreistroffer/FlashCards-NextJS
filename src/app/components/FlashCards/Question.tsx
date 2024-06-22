import { IFlashCard, IQuestion } from "@/_lib/definitions";
import React from "react";
import { shuffle } from "lodash";

export const Question = ({
  data,
  questionNumber,
  numOfQuestions,
}: {
  data: IFlashCard;
  questionNumber: number;
  numOfQuestions: number;
}): JSX.Element => {
  const { question, choices, answer, showAnswer } = data;
  console.log("answer", answer);

  const shuffledChoices = shuffle(choices);
  const correctAnswers: number[] = [];

  // for each choice
  choices.forEach((choice, choiceIndex) => {
    // for each shuffledChoice
    // given the choice index,
    shuffledChoices.forEach((shuffledChoice, shuffledIndex) => {
      //find in shuffledChoices the same string and get it's index if the choice index is an answer.
      if (answer.includes(choiceIndex) && choice === shuffledChoice) {
        correctAnswers.push(shuffledIndex);
      }
    });
  });

  console.log("correctAnswers", correctAnswers);

  return (
    <div>
      <p className="font-bold mr-3 mb-6 text-gray-400">
        {`${questionNumber}/${numOfQuestions}`}
      </p>
      <ul>
        <li className="li-question  mb-12 text-2xl">
          <span className="font-500">{question}</span>
        </li>
        {shuffledChoices.map((choice, choiceIndex) => {
          return (
            <li
              key={choiceIndex}
              className={`li-choice mb-3 ${
                showAnswer
                  ? // "A" === index is 0, 1, where 0 is A, 1 is B, etc.
                    correctAnswers.find(
                      (answerIndex) => answerIndex === choiceIndex
                    )
                    ? ""
                    : "line-through" + " opacity-50"
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
  );
};

export default Question;
