import React from "react";
import { render, screen } from "@testing-library/react";
import { StoryPreviewList } from "../../../components/story/StoryPreviewList";
import storyData from "../../../storage/stories.json";

describe("StoryPreviwList", () => {
  test("Check number of h1 tags or h2 tags are 3", async () => {
    const { container } = render(<StoryPreviewList storyList={storyData} />);
    expect(
      await screen.findByText("The Adventures of Sherlock Holmes")
    ).toBeInTheDocument();
    // title
    const h1Tags = container.querySelectorAll("h1");
    expect(h1Tags.length).toBe(4);
    const h2Tags = container.querySelectorAll("h2");
    expect(h2Tags.length).toBe(4);
  });
});
