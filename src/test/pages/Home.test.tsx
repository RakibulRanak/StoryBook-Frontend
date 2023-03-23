import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "../../pages/Home";
import { BrowserRouter } from "react-router-dom";

describe("<HomePage />", () => {
  test("renders correctly", async () => {
    render(
      <BrowserRouter> <Home /></BrowserRouter>);
    expect(
      await screen.findByText("The Adventures of Sherlock Holmes")
    ).toBeInTheDocument();
  });
});
