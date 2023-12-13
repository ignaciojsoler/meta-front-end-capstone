import Navbar from "./Navbar";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

describe("Navbar", () => {
  beforeEach(() => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
  });
  test("renders the navbar", () => {
    expect(screen.getByRole("navigation")).toBeDefined();
  });
  test("displays mobile menu on button click", () => {
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.getByRole("menu")).toBeDefined();
  });
});
