import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

describe("Loader component", () => {
  test("renders Loader component correctly", () => {
    render(<Loader />);
    expect(screen.getByText(/Loading\.\.\./)).toBeDefined();
  });
});
