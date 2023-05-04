import "whatwg-fetch";
import React from "react";
import { render, screen, act } from "@testing-library/react";
import { Home } from "../../pages/Home";
import { renderWithProviders } from "../test-utils";

describe("<HomePage />", () => {
  test("renders correctly", async () => {
    renderWithProviders(<Home />);
    expect(await screen.findByText("Hello World")).toBeInTheDocument();
  });
});
