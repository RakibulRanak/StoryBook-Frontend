import "whatwg-fetch";
import { render, screen, waitFor } from "@testing-library/react";
import { StoryPreviewList } from "../../../components/story/StoryPreviewList";
import { renderWithProviders } from "../../test-utils";

describe("StoryPreviewList", () => {
  it("renders a loading message when stories are loading", () => {
    renderWithProviders(<StoryPreviewList />);
  });

  it("renders a list of story previews when stories are loaded", async () => {
    renderWithProviders(<StoryPreviewList />);
    await waitFor(() => {
      screen.getByText("Hello World");
      expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(2);
    });
  });
});
