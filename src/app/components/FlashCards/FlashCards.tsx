"use client";

import React from "react";
import styles from "./styles.module.css";
import { random, shuffle } from "lodash";
import Question from "./Question";
import aws_questions from "@/data/aws_questions";
import { IFlashCard } from "@/_lib/definitions";
/**
 *
 * @returns
 */

const FlashCards = () => {
  const [cards, setCards] = React.useState<IFlashCard[]>(
    shuffle([...aws_questions])
  );

  const [currentCardIndex, setCurrentCardIndex] = React.useState(0);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrevCard = () => {
    console.log("prev card", currentCardIndex);
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
    console.log("prev cardz", currentCardIndex);
    // setCards((state) => {
    //   return state.map((card, index) => {
    //     if (index === currentCardIndex) {
    //       return {
    //         ...card,
    //         showAnswer: false,
    //       };
    //     } else {
    //       return card;
    //     }
    //   });
    // });
  };

  const shuffleQuestions = () => {
    setCards((state) => {
      console.log("randomizing");
      const shuffledCards = shuffle(state);
      return shuffledCards.map((card) => {
        const { choices, answer } = card;
        const shuffledChoices = shuffle(choices);
        const correctAnswers: number[] = [];

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

        return {
          ...card,
          choices: shuffledChoices,
          answer: correctAnswers,
          showAnswer: false,
        };
      });
    });
    setCurrentCardIndex(0);
  };

  // const shuffleChoices = (data: IFlashCard) => {
  //   const { choices, answer } = data;
  //   const shuffledChoices = shuffle(choices);
  //   const correctAnswers: number[] = [];

  //   // for each choice
  //   choices.forEach((choice, choiceIndex) => {
  //     // for each shuffledChoice
  //     // given the choice index,
  //     shuffledChoices.forEach((shuffledChoice, shuffledIndex) => {
  //       //find in shuffledChoices the same string and get it's index if the choice index is an answer.
  //       if (answer.includes(choiceIndex) && choice === shuffledChoice) {
  //         correctAnswers.push(shuffledIndex);
  //       }
  //     });
  //   });

  //   return {
  //     ...data,
  //     choices: shuffledChoices,
  //     answer: correctAnswers,
  //     showAnswer: false,
  //   };
  // };

  return (
    <div
      className={`${styles["flashcard-container"]} flex flex-col justify-start`}
    >
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl  max-w-xl">AWS Practice Questions</h1>
        <button
          type="button"
          onClick={shuffleQuestions}
          className="border rounded p-3 bg-black text-white pointer"
        >
          <i className="fa-solid fa-shuffle text-white"></i> Shuffle?
        </button>
      </div>

      <div
        className="card-container min-h-96 max-h-96 w-full mb-6 overflow-y-auto"
        onClick={() => {
          setCards((state) => {
            // i need to find the current card and toggle it's showQuestion.
            return state.map((card, index) => {
              if (index === currentCardIndex) {
                return {
                  ...card,
                  showAnswer: !card.showAnswer,
                };
              } else {
                return card;
              }
            });
          });
        }}
      >
        <Question
          data={cards[currentCardIndex]}
          numOfQuestions={cards.length}
          questionNumber={currentCardIndex + 1}
        />
      </div>

      <div className="flex justify-between">
        <button
          className="rounded p-3 border mr-2 flex-1 bg-black text-white"
          onClick={handlePrevCard}
          type="button"
          disabled={currentCardIndex === 0 ? true : false}
        >
          Previous
        </button>
        <button
          className="rounded p-3 border flex-1 bg-black text-white"
          onClick={handleNextCard}
          type="button"
          disabled={currentCardIndex === cards.length - 1 ? true : false}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FlashCards;
