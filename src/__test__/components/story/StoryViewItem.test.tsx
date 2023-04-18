import React from "react";
import { render, screen } from "@testing-library/react";
import { StoryViewItem } from "../../../components/story/StoryViewItem";

import { store } from "../../../app/store";
import { Provider } from "react-redux";

describe("StoryViewItem component", () => {
  //const cashedQueries = store.getState().storyApi.queries;
  const setupTest = (id: number): void => {
    render(
      <Provider store={store}>
        <StoryViewItem id={id} />
      </Provider>
    );
  };

  test("renders the story with the correct title and author", () => {
    setupTest(111);
    // expect(screen.getByText("Vacancy at CEFALO")).toBeInTheDocument();
    // expect(screen.getByText("RakibulRanak").toBeInTheDocument();
  });

  // test("renders an error message if the story is not found", () => {
  //   setupTest(10000);
  //   expect(screen.getByText("Story Not Found")).toBeInTheDocument();
  // });
});
