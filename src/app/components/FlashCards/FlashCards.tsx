"use client";

import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { random, shuffle } from "lodash";
import FlashCard from "./FlashCard";
import aws_questions from "@/data/aws_questions";
import { IFlashCard } from "@/_lib/definitions";

const FlashCards = () => {
  const [cards, setCards] = React.useState<IFlashCard[]>([...aws_questions]);
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0);
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

            showAnswer: false,
          };
        } else {
          return { ...card };
        }
      });
    });
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    resetNonActiveCardState();
  };

  const handlePrevCard = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
    resetNonActiveCardState();
  };

  /**
   * Shuffles the questions and choices.
   */
  const shuffleQuestions = () => {
    setCards((state) => {
      const shuffledCards = shuffle(state);
      return shuffledCards.map((card) => {
        const { choices } = card;
        const shuffledChoices = shuffle(choices);

        return {
          ...card,
          choices: shuffledChoices,
          showAnswer: false,
          guesses: [],
        };
      });
    });
    setCurrentCardIndex(0);
  };

  const toggleCard = () => {
    setCards((state) => {
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
  };

  return (
    <div
      className={`${styles["flashcard-container"]} flex flex-col justify-start`}
    >
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl max-w-xl">AWS Practice Questions</h2>
        <button
          type="button"
          onClick={shuffleQuestions}
          className="border rounded p-3 bg-black text-white pointer"
        >
          <i className="fa-solid fa-shuffle text-white"></i> Shuffle?
        </button>
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
          toggleCard={toggleCard}
          setGuesses={(guesses: number) => {
            setCards((state) => {
              return state.map((card, index) => {
                if (index === currentCardIndex) {
                  if (card.guesses.includes(guesses)) {
                    return {
                      ...card,
                      guesses: card.guesses.filter((item) => item !== guesses),
                    };
                  } else {
                    return {
                      ...card,
                      guesses:
                        card.maxGuesses === 1
                          ? [guesses]
                          : [...card.guesses, guesses],
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
          <button
            className={`${styles["continue-button"]} rounded p-3 border flex-1 bg-black text-white`}
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
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashCards;
