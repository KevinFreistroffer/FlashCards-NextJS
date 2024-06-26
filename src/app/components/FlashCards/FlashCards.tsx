"use client";

import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { random, shuffle } from "lodash";
import FlashCard from "./FlashCard";
import aws_questions from "@/data/all";
import { IFlashCard } from "@/lib/definitions";

export type TContinueButtonState =
  | EContinueButtonState.CONTINUE
  | EContinueButtonState.NEXT;
export enum EContinueButtonState {
  CONTINUE = "continue",
  NEXT = "next",
}

export const cardDefaultValues = {
  guesses: [],
  guessedCorrectly: false,
  showAnswer: false,
};

const FlashCards = () => {
  const [cards, setCards] = React.useState<IFlashCard[]>([...aws_questions]);
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0);
  const [continueButtonState, setContinueButtonState] =
    React.useState<TContinueButtonState>(EContinueButtonState.CONTINUE);
  const progressRef = useRef<HTMLDivElement>(null);

  /**
   * Sets showAnswer to false for all cards except the current card.
   */
  const resetNonActiveCardState = () => {
    setCards((state) => {
      return state.map((card, index) => {
        if (index === currentCardIndex) {
          return {
            ...card,
          };
        } else {
          return { ...card, ...cardDefaultValues };
        }
      });
    });
  };

  const handlePrevCard = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
    // resetNonActiveCardState();
  };

  const handleContinue = () => {
    const correctAnswers = cards[currentCardIndex].choices.map(
      (choice, index) => {
        if (choice.correct) {
          return choice.id;
        }
      }
    );
    const { guesses } = cards[currentCardIndex];
    const isCorrect = guesses.every((guess) => correctAnswers.includes(guess));

    setCards((state) => {
      return state.map((card, index) => {
        if (index === currentCardIndex) {
          return {
            ...card,
            guessedCorrectly: isCorrect,
            showAnswer: true,
          };
        } else {
          return card;
        }
      });
    });

    setContinueButtonState(EContinueButtonState.NEXT);
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setContinueButtonState(EContinueButtonState.CONTINUE);
    // resetNonActiveCardState();
  };

  /**
   * Shuffles the questions and choices.
   */
  const shuffleQuestions = () => {
    console.log("shuffleQuestions");
    setCards((state) => {
      const shuffledCards = shuffle(state);
      return shuffledCards.map((card) => {
        const { choices } = card;
        const shuffledChoices = shuffle(choices);

        return {
          ...card,
          ...cardDefaultValues,
          choices: shuffledChoices,
        };
      });
    });
    setCurrentCardIndex(0);
    setContinueButtonState(EContinueButtonState.CONTINUE);
  };

  // const toggleCard = () => {
  //   setCards((state) => {
  //     return state.map((card, index) => {
  //       if (index === currentCardIndex) {
  //         return {
  //           ...card,
  //           showAnswer: !card.showAnswer,
  //         };
  //       } else {
  //         return card;
  //       }
  //     });
  //   });
  // };

  return (
    <div
      className={`${styles["flashcard-container"]} flex flex-col justify-start`}
    >
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl max-w-xl">AWS Practice Questions</h2>
        <div>
          <button
            type="button"
            onClick={shuffleQuestions}
            className={`${styles["shuffle-button"]} border rounded p-3 bg-black text-white pointer`}
          >
            <i className="fa-solid fa-shuffle text-white"></i> Shuffle
          </button>
          <button
            type="button"
            onClick={() => {
              setCurrentCardIndex(0);
              resetNonActiveCardState();
            }}
            className={`${styles["shuffle-button"]} border rounded p-3 bg-black text-white pointer`}
          >
            <i className="fa-solid fa-arrows-rotate"></i> Restart
          </button>
        </div>
      </div>

      <div className={`${styles["card-container"]} w-full`}>
        <div className="flex justify-center items-center mb-1">
          <p className="font-bold mr-3 text-gray-400">
            {`${currentCardIndex + 1}/${cards.length}`}
          </p>
          <div
            className={`${styles["progress-bar"]} bg-gray-200 rounded h-3`}
            data-testid="progress-bar"
          >
            <div
              ref={progressRef}
              style={{
                width: `${((currentCardIndex + 1) / cards.length) * 100}%`,
              }}
              className="bg-gray-500 w-2 h-full"
            ></div>
          </div>
        </div>
        <FlashCard
          data={cards[currentCardIndex]}
          continueButtonState={continueButtonState}
          setGuesses={(guess: number) => {
            setCards((cardsState) => {
              return cardsState.map((card, index) => {
                const correctChoices = card.choices.filter((choice) => choice);
                if (index === currentCardIndex) {
                  // De-selects the checkbox if it is already selected.
                  if (card.guesses.includes(guess)) {
                    const _guesses = card.guesses.filter(
                      (item) => item !== guess
                    );
                    return {
                      ...card,
                      guesses: _guesses,
                    };
                  } else {
                    // If the card only allows one guess, it replaces the current guess with the new guess.
                    // Otherwise, it adds the new guess to the guesses array.
                    const _guesses =
                      card.maxGuesses === 1
                        ? [guess]
                        : [...card.guesses, guess];
                    return {
                      ...card,
                      guesses: _guesses,
                    };
                  }
                } else {
                  return card;
                }
              });
            });
          }}
        />
      </div>

      <div
        className={`${styles["buttons"]} flex flex-col justify-between bg-white`}
      >
        <div className="flex">
          <button
            className={`${styles["prev-button"]} rounded p-3 border mr-2 flex-1 bg-black text-white`}
            onClick={handlePrevCard}
            type="button"
            disabled={currentCardIndex === 0 ? true : false}
          >
            Previous
          </button>
          {continueButtonState === EContinueButtonState.CONTINUE ? (
            <button
              className={`${styles["continue-button"]} rounded p-3 border flex-1 bg-black text-white`}
              onClick={handleContinue}
              type="button"
              disabled={
                cards[currentCardIndex].guesses.length <
                cards[currentCardIndex].maxGuesses
              }
            >
              Continue
            </button>
          ) : (
            <button
              className={`${styles["next-button"]} rounded p-3 border flex-1 bg-black text-white`}
              onClick={handleNextCard}
              type="button"
              disabled={
                currentCardIndex === cards.length - 1
                  ? true
                  : false ||
                    cards[currentCardIndex].guesses.length <
                      cards[currentCardIndex].maxGuesses
              }
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlashCards;
