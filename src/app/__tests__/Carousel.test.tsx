import { render, screen, waitFor } from "@testing-library/react";
import Carousel from "./../ui/Carousel";
import "@testing-library/jest-dom";

const mockItems = [
  {
    title: "Item 1",
    url: "/url1.jpg",
    alt: "Image 1",
    description: "Description 1",
    type: "image",
  },
  {
    title: "Item 2",
    url: "/url2.jpg",
    alt: "Image 2",
    description: "Description 2",
    type: "image",
  },
];

describe("Carousel", () => {
  it("renders all the items of the carousel", async () => {
    render(<Carousel items={mockItems} />);

    await waitFor(() => {
      expect(screen.getByText("Item 1")).toBeInTheDocument();
      expect(screen.queryByText("Item 2")).toBeInTheDocument();
    });
  });
});
