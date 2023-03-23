import React from "react";
import { render, screen } from "@testing-library/react";
import { StoryPreviewItem } from "../../../components/story/StoryPreviewItem";
import { BrowserRouter } from "react-router-dom";

const testStory = {
  id: 0,
  story: "Once upon a time",
  author: "RakibulRanak",
  title: "Tiger and Lion",
  postedAt: "2021-11-30T09:11:29.272Z",
};

describe("renders story preview item correctly", () => {
  test("test if the tag elements exists", async () => {
    const { getByText } = render(<BrowserRouter><StoryPreviewItem {...testStory} /></BrowserRouter>);
    expect(await screen.findByText("RakibulRanak")).toBeInTheDocument();
    const titleElement = getByText(testStory.title);
    const authorElement = getByText(testStory.author);
    const storyElement = getByText(testStory.story);
    expect(titleElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
    expect(storyElement).toBeInTheDocument();
  }),
    test("test if the title and author are in proper h tags", async () => {
      const { getByText } = render(<BrowserRouter><StoryPreviewItem {...testStory} /></BrowserRouter>);
      const titleElement = getByText(testStory.title);
      const storyElement = getByText(testStory.story);
      expect(titleElement.tagName).toBe("H1");
      expect(storyElement.tagName).toBe("H2");
    });
});
