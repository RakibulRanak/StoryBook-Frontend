import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "../../pages/Home";

describe("<HomePage />", () => {
  test("renders correctly", async () => {
    render(<Home />);
    expect(
      await screen.findByText("The Adventures of Sherlock Holmes")
    ).toBeInTheDocument();
  });
});
