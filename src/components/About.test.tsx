import About from "./About";
import { render, screen } from "@testing-library/react";

describe("About", () => {
    test("should render", () => {
        render(<About />);
        expect(screen.getByText("About Us")).toBeDefined();
    });
})