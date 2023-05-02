import { render, screen, fireEvent } from "@testing-library/react";
import { Navbar } from "../../../components/generic/Navbar";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "../../../app/store";
import { Provider } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../app/hook";
import { RootState } from "../../../app/store";
// import { signIn } from "../../../features/authSlice";
import { useSignInMutation } from "../../../services/authApi";

const store = setupStore();

describe("Navbar", () => {
  const user = {
    username: "RakibulRanak",
    password: "11703127",
  };
  const setupTest = (): void => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
  };

  test("should render the app name", () => {
    setupTest();
    expect(screen.getByText("StoryHub")).toBeInTheDocument();
  });

  test("should show login button when initially before logged in", () => {
    setupTest();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  //  user is logged in now

  //   test("should login and update redux state", async () => {
  //     const [signIn] = useSignInMutation();
  //     await signIn(user);
  //     setupTest();
  //     expect(screen.getByRole("button", { name: /logout/i })).toBeInTheDocument();
  //     expect(store.getState().auth.username).toBe(user.username);
  //     expect(store.getState().auth.loggedIn).toBe(true);
  //   });

  //   test("should show username when logged in", () => {
  //     setupTest();
  //     expect(screen.queryByText(user.username)).toBeInTheDocument();
  //   });

  //   test("should show logout button when  logged in", () => {
  //     setupTest();
  //     expect(screen.getByRole("button", { name: /logout/i })).toBeInTheDocument();
  //   });

  //  user is logged out
  //   test("should show login button when clicked logout", () => {
  //     setupTest();
  //     fireEvent.click(screen.getByRole("button", { name: /logout/i }));
  //     expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  //   });

  test("should not have user state in redux store after logout", () => {
    setupTest();
    expect(store.getState().auth.username).toBe("");
    expect(store.getState().auth.loggedIn).toBe(false);
  });

  test("should not show username when logged out", () => {
    setupTest();
    expect(screen.queryByText(user.username)).not.toBeInTheDocument();
  });

  test("should goto home route when StoryHub text is clicked", () => {
    setupTest();
    const homeLink = screen.getByTestId("storyHub");
    fireEvent.click(homeLink);
    expect(window.location.pathname).toBe("/");
  });

  test("should goto login route when Login button is clicked", () => {
    setupTest();
    fireEvent.click(screen.getByRole("button", { name: /login/i }));
    expect(window.location.pathname).toBe("/signin");
  });
});
// export {};
