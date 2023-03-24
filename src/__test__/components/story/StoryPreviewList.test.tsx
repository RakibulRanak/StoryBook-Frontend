import React from "react";
import { render, screen } from "@testing-library/react";
import { StoryPreviewList } from "../../../components/story/StoryPreviewList";
import storyData from "../../../storage/stories.json";
import { BrowserRouter } from "react-router-dom";

describe("StoryPreviwList", () => {

  const setupTest = (): void => {
    render(<BrowserRouter><StoryPreviewList storyList={storyData} /> </BrowserRouter>)
  }

  test("Check number of story previews", () => {
    setupTest();
    expect(screen.getByText("The Adventures of Sherlock Holmes")).toBeInTheDocument();
    const total_Titles = screen.queryAllByTestId('storyPreviewItem');
    expect(total_Titles).toHaveLength(4);
  });
});
