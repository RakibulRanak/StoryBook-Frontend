import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { StoryViewItem } from "../../../components/story/StoryViewItem";
import { server } from "../../../mocks/server";
import { rest } from "msw";
import { setupStore } from "../../../app/store";
import { Provider } from "react-redux";

describe("StoryViewItem component", () => {
  //const cashedQueries = store.getState().storyApi.queries;
  const setupTest = (id: number): void => {
    render(
      <Provider store={setupStore()}>
        <StoryViewItem id={id} />
      </Provider>
    );
  };

  test("renders the story with the correct title and author", async () => {
    setupTest(1);
    await waitFor(() => {
      expect(screen.getByText("mock story")).toBeInTheDocument();
    });
  });

  test("renders an error message if the story is not found", async () => {
    server.use(
      rest.get(
        `https://story-hub-backend-5v21.onrender.com/api/v1/stories/10000`,
        (req, res, ctx) => {
          return res(
            ctx.status(404),
            ctx.json({
              status: "fail",
              message: "Story not found",
            })
          );
        }
      )
    );
    setupTest(10000);
    await waitFor(() => {
      expect(screen.getByText("Story Not Found")).toBeInTheDocument();
    });
  });
});
