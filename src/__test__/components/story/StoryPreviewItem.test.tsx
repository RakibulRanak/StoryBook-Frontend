import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { StoryPreviewItem } from "../../../components/story/StoryPreviewItem";
import { BrowserRouter } from "react-router-dom";

const testStory = {
  id: 1,
  story: "Once upon a time",
  author: "RakibulRanak",
  title: "Tiger and Lion",
  postedAt: "2021-11-30T09:11:29.272Z",
};

describe("renders story preview item correctly", () => {

  const setupTest = (): void => {
    render(<BrowserRouter><StoryPreviewItem {...testStory} /></BrowserRouter>);
  }

  test("test if the tag elements exists", async () => {
    setupTest();
    expect(screen.getByText(testStory.title)).toBeInTheDocument();
    expect(screen.getByText(testStory.author)).toBeInTheDocument();
    expect(screen.getByText(testStory.story)).toBeInTheDocument();
  });

  test("test if the title and author are in proper h tags", async () => {
    setupTest();
    const titleElement = screen.getByText(testStory.title);
    const storyElement = screen.getByText(testStory.story);
    expect(titleElement.tagName).toBe("H1");
    expect(storyElement.tagName).toBe("H2");
  });

  test("Go to /stories/:id page when clicked to story title", () => {
    setupTest();
    const titleElement = screen.getByText(testStory.title);
    fireEvent.click(titleElement);
    expect(window.location.pathname).toBe(`/stories/${testStory.id}`);
  });

});
