import React from "react";
import { AuthenticatedStoryActions } from "../../../components/story/AuthenticatedStoryActions";
import "@testing-library/jest-dom/extend-expect";
import { screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { StoryModal } from "../../../components/story/StoryModal";
import { ConfirmDeleteDialog } from "../../../components/generic/ConfirmDeleteDialog";
import { renderWithProviders } from "../../test-utils";

jest.mock("../../../components/story/StoryModal", () => {
  return {
    StoryModal: jest.fn((props: any) => {
      return <div>Mocked StoryModal</div>;
    }),
  };
});

jest.mock("../../../components/generic/ConfirmDeleteDialog", () => {
  return {
    ConfirmDeleteDialog: jest.fn((props: any) => {
      return <div>Mocked DeleteDialog</div>;
    }),
  };
});
const testStory1 = {
  author: "Rakibul",
  id: 1,
  title: "test story",
  story: "this is a test story",
  postedAt: "some date",
};

const testStory2 = {
  author: "RakibulRanak",
  id: 1,
  title: "test story 2",
  story: "this is a test story 2",
  postedAt: "some date",
};

describe("Render AuthencitedStoryActions", () => {
  beforeEach(() => {
    const root = document.createElement("div");
    const portal = document.createElement("div");
    root.setAttribute("id", "root");
    portal.setAttribute("id", "portal");
    document.body.appendChild(root);
    document.body.appendChild(portal);
  });

  const setUpTest = (testStory: any): void => {
    renderWithProviders(
      <AuthenticatedStoryActions {...testStory}></AuthenticatedStoryActions>,
      {
        preloadedState: {
          auth: {
            username: "RakibulRanak",
            loggedIn: true,
            access_token: "kaaaa",
          },
        },
      }
    );
  };

  test("Render successfully and edit delete icon not found while logged out", () => {
    setUpTest(testStory1);
    const editButton = screen.queryByTestId("EditIcon");
    expect(editButton).not.toBeInTheDocument();
    const deleteButton = screen.queryByTestId("DeleteIcon");
    expect(deleteButton).not.toBeInTheDocument();
  });

  test("Render successfully and edit delete icon not found when user is logged in but author name is different", () => {
    setUpTest(testStory1);
    const editButton = screen.queryByTestId("EditIcon");
    expect(editButton).not.toBeInTheDocument();
    const deleteButton = screen.queryByTestId("DeleteIcon");
    expect(deleteButton).not.toBeInTheDocument();
  });

  test("Render successfully and edit delete icon found when logged in username and author same", () => {
    setUpTest(testStory2);
    const editButton = screen.getByTestId("EditIcon");
    expect(editButton).toBeInTheDocument();
    const deleteButton = screen.getByTestId("DeleteIcon");
    expect(deleteButton).toBeInTheDocument();
  });

  // test("Successful button click real action of edit", async () => {
  //   setUpTest(testStory2);

  //   const editButton = screen.getByTestId("EditIcon");
  //   const deleteButton = screen.getByTestId("DeleteIcon");

  //   fireEvent.click(editButton);
  //   await waitFor(() => {
  //     expect(screen.getByText("test story 2")).toBeInTheDocument();
  //     expect(screen.getByText("UPDATE")).toBeInTheDocument();
  //   });
  //   const updateButton = screen.getByText("UPDATE");
  //   fireEvent.click(updateButton);
  //   await waitFor(() => {
  //     expect(screen.queryByText("test story 2")).toBeInTheDocument();
  //   });
  // });

  // test("Successful button click real action of delete", async () => {
  //   setUpTest(testStory2);
  //   const deleteIcon = screen.getByTestId("DeleteIcon");
  //   fireEvent.click(deleteIcon);
  //   await waitFor(() => {
  //     expect(screen.getByText("Delete")).toBeInTheDocument();
  //   });
  //   const confirmDeleteButton = screen.getByText("Delete");
  //   fireEvent.click(confirmDeleteButton);
  //   await waitFor(() => {
  //     expect(screen.queryByText("test story 2")).not.toBeInTheDocument();
  //   });
  // });

  test("Successful button click mock action of edit and delete", () => {
    act(() => {
      setUpTest(testStory2);
    });
    const editButton = screen.getByTestId("EditIcon");
    const deleteButton = screen.getByTestId("DeleteIcon");
    fireEvent.click(editButton);
    expect(StoryModal).toHaveBeenCalledWith(
      {
        id: testStory2.id,
        title: testStory2.title,
        story: testStory2.story,
        close: expect.any(Function),
      },
      {}
    );
    fireEvent.click(deleteButton);
    expect(ConfirmDeleteDialog).toHaveBeenCalledWith(
      {
        id: testStory2.id,
        close: expect.any(Function),
        submit: expect.any(Function),
        isLoading: false,
      },
      {}
    );
  });
});

export {};
