import OrderDetails from "./OrderDetails";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

const mockUserData = {
    firstName: "John",
    lastName: "Doe",
    phone: "1234567890",
    date: new Date(),
    guests: 2,
    time: "20:00",
    ocassion: "Birthday",
};

describe("OrderDetails", () => {
    beforeEach(() => {
        render(<Router><OrderDetails userData={mockUserData} /></Router>);
    });
    test("should render", () => {
        expect(screen.getByText("John")).toBeDefined();
        expect(screen.getByText("Doe")).toBeDefined();
        expect(screen.getByText("1234567890")).toBeDefined();
    });
    test("navigates to home on button click", () => {
        const button = screen.getByText("Go back to home");
        fireEvent.click(button);
        expect(window.location.pathname ).toBe("/");
    })
})