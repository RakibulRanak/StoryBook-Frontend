import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { SignUp } from "../../pages/SignUp";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

describe("SignUp component", () => {
  const setupTest = (): void => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>
      </Provider>
    );
  };

  test("renders correctly", () => {
    setupTest();
    expect(screen.getByTestId("usernameInput")).toBeInTheDocument();
    expect(screen.getByTestId("passwordInput")).toBeInTheDocument();
    expect(screen.getByTestId("nameInput")).toBeInTheDocument();
    expect(screen.getByTestId("emailInput")).toBeInTheDocument();
    expect(screen.getByTestId("confirmpasswordInput")).toBeInTheDocument();
    //expect(getByText("Username *")).toBeInTheDocument();
  });

  test("shows sign in link", () => {
    setupTest();
    const signInLink = screen.getByText("Already have an account? Sign in");
    expect(signInLink).toBeInTheDocument();
  });

  test("Go to Sign in page when clicked", () => {
    setupTest();
    const signInLink = screen.getByText("Already have an account? Sign in");
    expect(signInLink).toBeInTheDocument();
    fireEvent.click(signInLink);
    expect(window.location.pathname).toBe("/signin");
  });

  //   test("Increase user array size when submit button is clicked", () => {
  //     const mockConsoleLog = jest.spyOn(console, "log").mockImplementation();
  //     setupTest();
  //     fireEvent.change(screen.getByLabelText("Name *"), {
  //       target: { value: "John Doe" },
  //     });

  //     fireEvent.change(screen.getByLabelText("Username *"), {
  //       target: { value: "johndoe" },
  //     });

  //     fireEvent.change(screen.getByLabelText("Email *"), {
  //       target: { value: "johndoe@example.com" },
  //     });

  //     fireEvent.change(screen.getByLabelText("Password *"), {
  //       target: { value: "password" },
  //     });

  //     fireEvent.change(screen.getByLabelText("Confirm Password *"), {
  //       target: { value: "password" },
  //     });

  //     const prevSize = store.getState().auth.users.length;
  //     fireEvent.submit(screen.getByRole("button", { name: "Sign Up" }));
  //     const curSize = store.getState().auth.users.length;

  //     expect(curSize).toBe(prevSize + 1);
  //   });
});
// export {};
