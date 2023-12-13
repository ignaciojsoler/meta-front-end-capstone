import TestimonialCard from "./TestimonialCard";
import { render, screen } from "@testing-library/react";

const mockTestimonial = {
    id: 1,
    rating: 5,
    name: 'John Doe',
    review: 'This is a fantastic restaurant!',
  };

describe("TestimonialCard", () => {
  test("should render", () => {
    render(<TestimonialCard key={mockTestimonial.id} testimonial={mockTestimonial} />);
    expect(screen.getByText("John Doe")).toBeDefined();
    expect(screen.getByText(/This is a fantastic restaurant!/)).toBeDefined();
  });
})