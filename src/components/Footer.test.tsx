import Footer from "./Footer";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
    test("renders Footer component with sections and links", () => {
        render(<Footer />);
        expect(screen.getAllByAltText("Logo")).toBeDefined();
        const footerSections = [
            { title: 'Navigation', links: [{path: "/", name: "Home"}] },
            { title: 'Social Media', links: [ {path: "/social", name: "Facebook"}] },
          ];
        footerSections.forEach((section) => {
            console.log(section);
            expect(screen.getByText(section.title)).toBeDefined();
            section.links.forEach((link) => {
                console.log(link);
                expect(screen.getByText(link.name)).toBeDefined();
            })
        })
    })
})