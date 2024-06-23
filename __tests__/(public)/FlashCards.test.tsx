import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { within } from "@testing-library/dom";
import Page from "@/app/(public)/page";
import aws_questions from "@/data/aws_questions";

describe("Home", () => {
  beforeEach(() => {
    render(<Page />);
  });

  const shuffleButton = () => screen.getByRole("button", { name: /shuffle/i });
  const prevButton = () => screen.getByRole("button", { name: /previous/i });
  const nextButton = () => screen.getByRole("button", { name: /next/i });

  it("renders a heading", () => {
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("AWS Practice Questions");
  });

  it("renders a shuffle button", () => {
    const button = screen.getByRole("button", { name: /shuffle/i });
    expect(button).toHaveTextContent("Shuffle");
  });

  it("renders current / total number of questions", () => {
    expect(screen.getByText(`1/${aws_questions.length}`)).toBeInTheDocument();
    fireEvent.click(nextButton());
    expect(screen.getByText(`2/${aws_questions.length}`)).toBeInTheDocument();
    fireEvent.click(prevButton());
    expect(screen.getByText(`1/${aws_questions.length}`)).toBeInTheDocument();
  });

  it("renders a question", () => {
    const question = screen.getByTestId("question");
    screen.debug(question);
    expect(question).toHaveTextContent(aws_questions[0].question);
  });

  it.skip("renders choices", () => {
    const flashcard = screen.getByTestId("flashcard");
    const choices = within(flashcard).getAllByRole("listitem");
    expect(choices).toHaveLength(aws_questions[0].choices.length);
    aws_questions[0].choices.forEach((choice, index) => {
      expect(choices[index]).toHaveTextContent(choice, {
        normalizeWhitespace: true,
      });
    });
  });
});