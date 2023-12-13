import Card from "./Card";
import { render, screen } from "@testing-library/react";

const productMock = {
  id: 1,
  name: "Salad",
  price: "$8.99",
  description: "Salad description",
  imageSrc: "https://example.com/img.jpg",
};

describe("Card", () => {
  test("should render", () => {
    render(<Card product={productMock} />);
    expect(screen.getByText("Salad")).toBeDefined();
  });
});
