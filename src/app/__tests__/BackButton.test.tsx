import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BackButton } from "./../ui/BackButton";

describe("BackButton Component", () => {
  beforeAll(() => {
    delete (window as any).location;
    window.location = { href: "" } as any;
  });

  test("renders the back button with text", () => {
    const { getByText } = render(<BackButton />);
    expect(getByText("Back")).toBeInTheDocument();
  });

  test('redirects to home on "Escape" key press', () => {
    render(<BackButton />);
    fireEvent.keyDown(window, { key: "Escape", code: "Escape" });
    expect(window.location.href).toBe("/");
  });
});
