import React from "react";
import { render, fireEvent, screen, getByText } from "@testing-library/react";
import { SignIn } from "../../pages/SignIn";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "../../app/store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";

describe("SignIn component", () => {
  const setupTest = (): void => {
    render(
      <Provider store={setupStore()}>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </Provider>
    );
  };

  test("renders correctly", () => {
    setupTest();
    expect(screen.getByTestId("usernameInput")).toBeInTheDocument();
    expect(screen.getByTestId("passwordInput")).toBeInTheDocument();
    expect(screen.getByText("Username *")).toBeInTheDocument();
  });

  test("shows sign up link", () => {
    setupTest();
    const signUpLink = screen.getByText("Don't have an account? Sign Up");
    expect(signUpLink).toBeInTheDocument();
  });

  test("Go to Sign up page when clicked", () => {
    setupTest();
    const signUpLink = screen.getByText("Don't have an account? Sign Up");
    expect(signUpLink).toBeInTheDocument();
    fireEvent.click(signUpLink);
    expect(window.location.pathname).toBe("/signup");
  });

  // test("Console log user data when submit button is clicked", () => {
  //   const mockConsoleLog = jest.spyOn(console, "log").mockImplementation();
  //   setupTest();

  //   fireEvent.change(screen.getByLabelText("Username *"), {
  //     target: { value: "johndoe" },
  //   });

  //   fireEvent.change(screen.getByLabelText("Password *"), {
  //     target: { value: "password" },
  //   });

  //   fireEvent.submit(screen.getByRole("button", { name: "Sign In" }));

  //   expect(mockConsoleLog).toHaveBeenCalledWith({
  //     username: "johndoe",
  //     password: "password",
  //   });
  //   mockConsoleLog.mockRestore();
  // });
});
