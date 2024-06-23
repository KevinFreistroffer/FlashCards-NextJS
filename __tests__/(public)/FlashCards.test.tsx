import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { within } from "@testing-library/dom";
import Page from "@/app/(public)/page";
import aws_questions from "@/data/aws_questions";

describe("Home", () => {
  const question = () => screen.getByTestId("question");
  const shuffleButton = () => screen.getByRole("button", { name: /shuffle/i });
  const prevButton = () => screen.getByRole("button", { name: /previous/i });
  const nextButton = () => screen.getByRole("button", { name: /next/i });

  it("renders a heading", () => {
    render(<Page />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("AWS Practice Questions");
  });

  it("renders a shuffle button", () => {
    render(<Page />);
    const button = screen.getByRole("button", { name: /shuffle/i });
    expect(button).toHaveTextContent("Shuffle");
  });

  it("renders current / total number of questions", () => {
    render(<Page />);
    expect(screen.getByText(`1/${aws_questions.length}`)).toBeInTheDocument();
    fireEvent.click(nextButton());
    expect(screen.getByText(`2/${aws_questions.length}`)).toBeInTheDocument();
    fireEvent.click(prevButton());
    expect(screen.getByText(`1/${aws_questions.length}`)).toBeInTheDocument();
  });

  it("renders a progress bar", () => {
    render(<Page />);
    expect(screen.getByTestId("progress-bar")).toBeInTheDocument();
  });

  it("renders a question", () => {
    render(<Page />);

    expect(question()).toHaveTextContent(aws_questions[0].question);
  });

  it("renders choices", () => {
    render(<Page />);
    const flashcard = screen.getByTestId("flashcard");
    const choices = within(flashcard).getAllByRole("listitem");
    expect(choices.length).toBeGreaterThan(0);
  });

  it("displays the correct answer(s)", () => {
    render(<Page />);
    const flashcard = screen.getByTestId("flashcard");
    const choices = within(flashcard).getAllByRole("listitem");
    fireEvent.click(question());
    screen.debug();
    expect(choices.length).toBeGreaterThan(0);
    console.log(choices[0].classList);
    const correctAnswers = choices.filter((c) =>
      c.classList.contains("line-through")
    );
    const inCorrectAnswers = choices.filter(
      (c) => !c.classList.contains("line-through")
    );
    expect(correctAnswers.length).toBeGreaterThan(0);
    expect(inCorrectAnswers.length).toBeGreaterThan(0);
  });
});
