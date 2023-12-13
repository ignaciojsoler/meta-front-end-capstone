import Button from "./Button";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Button", () => {
  const testFunction = vi.fn(() => {
    console.log("test");
  });
  beforeEach(() => {
    render(<Button text="test" onClick={() => testFunction()} />);
  });

  test("should render", () => {
    expect(screen.getByText("test")).toBeDefined();
  });

  test("handles click event", () => {
    const button = screen.getByText("test");
    fireEvent.click(button);
    expect(testFunction).toHaveBeenCalled();
  });
});
