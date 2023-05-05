import "whatwg-fetch";
import React from "react";
import { screen } from "@testing-library/react";
import { Home } from "../../pages/Home";
import { renderWithProviders } from "../test-utils";

describe("<HomePage />", () => {
  test("renders correctly", async () => {
    renderWithProviders(<Home />);
    expect(screen.queryByText("Want to post a story?")).not.toBeInTheDocument();
  });

  test("renders correctly", async () => {
    renderWithProviders(<Home />, {
      preloadedState: {
        auth: {
          username: "RakibulRanak",
          loggedIn: true,
          access_token: "k",
        },
      },
    });
    expect(screen.queryByText("Want to post a story?")).toBeInTheDocument();
  });
});
