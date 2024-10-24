import { render, screen } from "@testing-library/react";
import data from "./../../data/article.json";
import Article from "../article/page";
import "@testing-library/jest-dom";

describe("Article Component", () => {
  beforeEach(() => {
    render(<Article />);
  });

  it("renders the BackButton component", () => {
    expect(screen.getByText("Back")).toBeInTheDocument();
  });

  it("renders the HERO_ARTICLE section", () => {
    const heroSection = data.content.find(
      (section) => section.type === "HERO_ARTICLE"
    );

    expect(screen.getByText(heroSection.title)).toBeInTheDocument();
    expect(screen.getByText(heroSection.subtitle)).toBeInTheDocument();
    expect(screen.getByText(heroSection.publishingDate)).toBeInTheDocument();
    expect(
      screen.getByText(`Author: ${heroSection.author}`)
    ).toBeInTheDocument();
  });

  it("renders the HERO_ARTICLE section", () => {
    const heroSection = data.content.find(
      (section) => section.type === "HERO_ARTICLE"
    );

    expect(screen.getByText(heroSection.title)).toBeInTheDocument();
    expect(screen.getByText(heroSection.subtitle)).toBeInTheDocument();
  });

  it("renders the right number of paragraphs", async () => {
    const paragraphSections = data.content.filter(
      (section) => section.type === "PARAGRAPH"
    );
    const paragraphContainers = await screen.findAllByLabelText("Paragraph");
    expect(paragraphContainers.length).toBe(paragraphSections.length);
  });

  it("renders the CAROUSEL section", () => {
    const carouselSection = data.content.find(
      (section) => section.type === "CAROUSEL"
    );
    carouselSection.items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});
