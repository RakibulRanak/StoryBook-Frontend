import React from "react";
import { StoryModal } from "../../../components/story/StoryModal";
import "@testing-library/jest-dom/extend-expect";
//import { render } from "@testing-library/react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import { setupStore } from "../../../app/store";

// Mock getElementById to return a fake element

// const handelUpdateSubmit = jest.fn();
const close = jest.fn();

const noStoryDataProps = {
  close,
};

const updateStoryProps = {
  title: "test story",
  story: "this is the test story",
  id: 1,
  close,
};

const postStoryData = {
  title: "Test Story Posting",
  story: "This is a story which is automatically posted by test file",
};

describe("Render StoryModal", () => {
  beforeEach(() => {
    const root = document.createElement("div");
    const portal = document.createElement("div");
    root.setAttribute("id", "root");
    portal.setAttribute("id", "portal");
    document.body.appendChild(root);
    document.body.appendChild(portal);
  });

  const setUpTest = (data: any): void => {
    renderWithProviders(<StoryModal {...data}></StoryModal>, {
      preloadedState: {
        auth: {
          username: "RakibulRanak",
          loggedIn: true,
          access_token: "k",
        },
      },
    });
  };

  test("Successful Render and Close of StoryModal", () => {
    setUpTest(noStoryDataProps);
    const cancelButton = screen.getByRole("button", { name: "Cancel" });
    expect(cancelButton).toBeInTheDocument();
    fireEvent.click(cancelButton);
    expect(close).toHaveBeenCalled();
  });

  test("Render StoryModal in Update mode with title and story", () => {
    setUpTest(updateStoryProps);
    expect(screen.getByRole("button", { name: "UPDATE" })).toBeInTheDocument();
    expect(screen.getByTestId("title")).toBeInTheDocument();
    expect(screen.getByTestId("title").innerHTML).toBe("test story");
    expect(screen.getByTestId("story")).toBeInTheDocument();
    expect(screen.getByTestId("story").innerHTML).toBe(
      "this is the test story"
    );
  });

  test("Render StoryModal in Update mode and Update action is called", async () => {
    setUpTest(updateStoryProps);
    const submitButton = screen.getByRole("button", { name: "UPDATE" });
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.getByText("test story")).toBeInTheDocument();
    });
  });

  test("Post a story using StoryModal", async () => {
    setUpTest(noStoryDataProps);

    fireEvent.change(screen.getByPlaceholderText("Title"), {
      target: { value: postStoryData.title },
    });

    fireEvent.change(screen.getByPlaceholderText("Story"), {
      target: {
        value: postStoryData.story,
      },
    });
    const submitButton = screen.getByRole("button", { name: "POST" });
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.getByText("Test Story Posting")).toBeInTheDocument();
    });
  });
});
