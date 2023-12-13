import BookingForm from "./BookingForm";
import { fireEvent, render, screen } from "@testing-library/react";

describe("BookingForm", () => {
    const testFunction = vi.fn(() => {
        console.log("Data submited");
        return Promise.resolve();
    })
    beforeEach(() => {
        render(<BookingForm onSubmit={testFunction} />);
      });
    test("should render", () => {
        expect(screen.getByText("First Name")).toBeDefined();
    });
    test('submits form data on button click', async () => {
        const form = screen.getByRole("form");
        console.log(form);
        fireEvent.submit(form)
        expect(testFunction).toHaveBeenCalled();
    })
})