import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./../ui/Button";

jest.mock("next/link", () => ({ children, ...rest }) => (
  <a {...rest}>{children}</a>
));

describe("Button Component", () => {
  test("renders well with the provided props", () => {
    const { getByText, getByRole } = render(
      <Button text="Menu" href="/" ariaLabel="menu button" target="_blank" />
    );

    const button = getByText("Menu");
    expect(button).toBeInTheDocument();

    const link = getByRole("link");
    expect(link).toHaveAttribute("href", "/");
    expect(link).toHaveAttribute("aria-label", "menu button");
    expect(link).toHaveAttribute("target", "_blank");
  });
});
