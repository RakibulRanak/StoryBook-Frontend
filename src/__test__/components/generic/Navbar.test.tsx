import { screen, fireEvent } from "@testing-library/react";
import { Navbar } from "../../../components/generic/Navbar";
import { setupStore } from "../../../app/store";
import { renderWithProviders } from "../../test-utils";

const store = setupStore({});

describe("Navbar", () => {
  const user = {
    username: "RakibulRanak",
    loggedIn: true,
    access_token: "k",
  };
  const setupTest = (loggedIn: boolean): void => {
    if (loggedIn)
      renderWithProviders(<Navbar />, {
        preloadedState: {
          auth: {
            username: "RakibulRanak",
            loggedIn: true,
            access_token: "k",
          },
        },
      });
    else renderWithProviders(<Navbar />);
  };

  test("should render the app name", () => {
    setupTest(false);
    expect(screen.getByText("StoryHub")).toBeInTheDocument();
  });

  test("should show login button when initially before logged in", () => {
    setupTest(false);
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  test("should show username when logged in", () => {
    setupTest(true);
    expect(screen.queryByText(user.username)).toBeInTheDocument();
  });

  test("should show logout button when  logged in", () => {
    setupTest(true);
    expect(screen.getByRole("button", { name: /logout/i })).toBeInTheDocument();
  });

  //  user is logged out
  test("should show login button when clicked logout", () => {
    setupTest(true);
    fireEvent.click(screen.getByRole("button", { name: /logout/i }));
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  test("should not have user state in redux store after logout", () => {
    setupTest(false);
    expect(store.getState().auth.username).toBe("");
    expect(store.getState().auth.loggedIn).toBe(false);
  });

  test("should not show username when logged out", () => {
    setupTest(false);
    expect(screen.queryByText(user.username)).not.toBeInTheDocument();
  });

  test("should goto home route when StoryHub text is clicked", () => {
    setupTest(true);
    const homeLink = screen.getByTestId("storyHub");
    fireEvent.click(homeLink);
    expect(window.location.pathname).toBe("/");
  });

  test("should goto login route when Login button is clicked", () => {
    setupTest(false);
    fireEvent.click(screen.getByRole("button", { name: /login/i }));
    expect(window.location.pathname).toBe("/signin");
  });
});
