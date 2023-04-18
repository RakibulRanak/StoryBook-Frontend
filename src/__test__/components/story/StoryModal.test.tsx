import React from "react";
import { StoryModal } from "../../../components/story/StoryModal";
import { store } from "../../../app/store";
import { Provider } from "react-redux";
import ReactDom from "react-dom";
import "@testing-library/jest-dom/extend-expect";
//import { render } from "@testing-library/react";
import { render, screen, fireEvent } from "@testing-library/react";

// Mock getElementById to return a fake element

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

  //   test("Update a Story using StoryModal", () => {
  //     setUpTest(updateStoryProps);
  //     const submitButton = screen.getByRole("button", { name: "UPDATE" });
  //     fireEvent.click(submitButton);
  //     //console.log(store.getState().story.storyList);
  //     expect(store.getState().story.storyList[0].title).toBe(
  //       updateStoryProps.title
  //     );
  //     expect(store.getState().story.storyList[0].story).toBe(
  //       updateStoryProps.story
  //     );
  //   });

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
