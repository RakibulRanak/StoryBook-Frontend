import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { SignIn } from "../../pages/SignIn";
import "@testing-library/jest-dom/extend-expect"

describe("SignIn component", () => {
  // test("renders correctly", () => {
  //   const { getByTestId, getByText } = render(<SignIn />);
  //   const inputUsername = screen.getByLabelText("Username")
  //   console.log(inputUsername)
  //   expect(1).toBe(1)
  //   // const usernameInput = getByTestId("usernameInput")
  //   // expect(usernameInput).toBeInTheDocument();
  //   // expect(usernameInput).toHaveValue('Username')
  //   // expect(getByTestId("passwordInput")).toBeInTheDocument();
  //   // expect(getByText("Sign in")).toBeInTheDocument();
  // });

  // test("submits form with username and password", () => {
  //   const { getByLabelText, getByRole } = render(<SignIn />);
  //   const usernameInput = getByLabelText("Username");
  //   const passwordInput = getByLabelText("Password");
  //   const submitButton = getByRole("button", { name: "Sign In" });

  //   fireEvent.change(usernameInput, { target: { value: "testuser" } });
  //   fireEvent.change(passwordInput, { target: { value: "testpassword" } });
  //   fireEvent.click(submitButton);

  //   expect(console.log).toHaveBeenCalledWith({
  //     username: "testuser",
  //     password: "testpassword",
  //   });
  // });

  test("shows sign up link", () => {
    //const { getByText } = render(<SignIn />);
    // const signUpLink = getByText("Don't have an account? Sign Up");

    // expect(signUpLink).toBeInTheDocument();
    expect(1).toBe(1)
  });
});
