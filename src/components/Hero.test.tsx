import Hero from "./Hero";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

describe("Hero", () => {
  beforeEach(() => {
    render(<Router><Hero /></Router>);
  });
  test("should render", () => {
    expect(screen.getByText(/Little Lemon/)).toBeDefined();
    expect(screen.getByText(/Chicago/)).toBeDefined();
    expect(
      screen.getByText(/We are a family owned Mediterranean restaurant/)
    ).toBeDefined();
    expect(screen.getByText(/Reserve a table/)).toBeDefined();
  });
});
