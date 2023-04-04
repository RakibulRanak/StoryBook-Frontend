import React from "react";
import { render, screen } from "@testing-library/react";
import { StoryViewItem } from "../../../components/story/StoryViewItem";
import storyData from "../../../storage/stories.json";
import { store } from "../../../app/store";
import { Provider } from "react-redux";

describe("StoryViewItem component", () => {
  const setupTest = (id: number): void => {
    render(
      <Provider store={store}>
        <StoryViewItem id={id} />
      </Provider>
    );
  };

  test("renders the story with the correct title and author", () => {
    setupTest(1);
    expect(screen.getByText(storyData[0].title)).toBeInTheDocument();
    expect(screen.getByText(storyData[0].author)).toBeInTheDocument();
  });

  test("renders an error message if the story is not found", () => {
    setupTest(10);
    expect(screen.getByText("Story Not Found")).toBeInTheDocument();
  });
});
