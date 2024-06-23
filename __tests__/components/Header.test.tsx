import Header from "@/app/components/Header/Header";
import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import configs from "../../src/configs";
import { publicRoutes } from "@/app/(public)/routes";
describe("Header", () => {
  const mockToggleMenu = jest.fn();
  it("renders a heading & menu", () => {
    render(
      <Header
        menuVisible={false}
        toggleMenu={mockToggleMenu}
        title={configs.title}
      />
    );
    screen.debug();

    const heading = screen.getByRole("heading", { level: 1 });
    const menu = screen.getByRole("navigation");
    const links = within(menu).getAllByRole("link");
    expect(heading).toHaveTextContent(configs.title);

    links.forEach((link, index) => {
      expect(link).toHaveTextContent(publicRoutes[index].text);
    });
  });
});
