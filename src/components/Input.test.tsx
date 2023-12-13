import Input from "./Input";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Input", () => {
    const testFunction = vi.fn(() => {
        console.log("on changed");
    });
    beforeEach(() => {
        render(<Input label="test" placeholder="test" onChangeText={() => testFunction()} />);
    });

    test("should render", () => {
        expect(screen.getByText("test")).toBeDefined();
    });

    test("handles change event", () => {
        const input = screen.getByPlaceholderText("test");
        expect(input).toBeDefined();
        fireEvent.change(input, {target: {value: "test"}});
        expect(testFunction).toHaveBeenCalled();
    })
})