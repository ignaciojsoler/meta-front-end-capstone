import Highlights from "./Highlights";
import { screen, render } from "@testing-library/react";

describe("Highlights", () => {
  test("should render", () => {
    render(<Highlights />);
    expect(screen.getByText(/This week specials!/)).toBeDefined();
    expect(screen.getByText(/Online Menu/)).toBeDefined();
  });
})