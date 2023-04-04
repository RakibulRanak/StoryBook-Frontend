import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "../../pages/Home";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import { Provider } from "react-redux";

describe("<HomePage />", () => {
  test("renders correctly", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter> <Home /></BrowserRouter>
      </Provider>
    );
    expect(
      await screen.findByText("The Adventures of Sherlock Holmes")
    ).toBeInTheDocument();
  });
});
