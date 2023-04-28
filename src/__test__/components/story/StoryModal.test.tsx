import React from "react";
import { StoryModal } from "../../../components/story/StoryModal";
import { store } from "../../../app/store";
import { Provider } from "react-redux";
import ReactDom from "react-dom";
import "@testing-library/jest-dom/extend-expect";
//import { render } from "@testing-library/react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

// Mock getElementById to return a fake element

const handelUpdateSubmit = jest.fn();
const close = jest.fn();

const noStoryDataProps = {
  close,
};

const updateStoryProps = {
  title: "test story updated",
  story: "this is the updated test story",
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
    render(
      <Provider store={store}>
        <StoryModal {...data} />
      </Provider>
    );
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
    expect(screen.getByTestId("title").innerHTML).toBe("test story updated");
    expect(screen.getByTestId("story")).toBeInTheDocument();
    expect(screen.getByTestId("story").innerHTML).toBe(
      "this is the updated test story"
    );
  });

  // test("Render StoryModal in Update mode and Update action is called", async () => {
  //   setUpTest(updateStoryProps);
  //   const submitButton = screen.getByRole("button", { name: "UPDATE" });

  //   await waitFor(() => {
  //     fireEvent.click(submitButton);
  //   });
  //   expect(handelUpdateSubmit).toHaveBeenCalled();
  // });

  //   test("Post a story using StoryModal", () => {
  //     setUpTest(noStoryDataProps);

  //     fireEvent.change(screen.getByPlaceholderText("Title"), {
  //       target: { value: postStoryData.title },
  //     });

  //     fireEvent.change(screen.getByPlaceholderText("Story"), {
  //       target: {
  //         value: postStoryData.story,
  //       },
  //     });
  //     const submitButton = screen.getByRole("button", { name: "POST" });
  //     fireEvent.click(submitButton);

  //     expect(store.getState().story.storyList[0].title).toBe(postStoryData.title);
  //     expect(store.getState().story.storyList[0].story).toBe(postStoryData.story);
  //   });
});
// export {};
