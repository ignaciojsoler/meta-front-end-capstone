import Testimonials from "./Testimonials";
import { render, screen } from "@testing-library/react";

vi.mock("../data/testimonials.json", async () => {
    const actual = await vi.importActual("../data/testimonials.json")
    return {
      ...actual,
      // your mocked methods
    }
  })

describe("Testimonials", () => {
    test("should render", () => {
        render(<Testimonials />);
        expect(screen.getByText("Testimonials")).toBeDefined();
        expect(screen.getByText("John Doe")).toBeDefined();
        expect(screen.getByText("Bob Smith")).toBeDefined();
        expect(screen.getByText(/Delicious food/)).toBeDefined();
    });
})