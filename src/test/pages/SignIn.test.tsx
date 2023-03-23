import React from "react";
import { render, fireEvent, screen, getByText } from "@testing-library/react";
import { SignIn } from "../../pages/SignIn";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect"

describe("SignIn component", () => {
  test("renders correctly", () => {
    const { getByTestId, getByText } = render(<BrowserRouter><SignIn /></BrowserRouter>);
    const usernameInput = getByTestId("usernameInput")
    expect(usernameInput).toBeInTheDocument();
    const passwordInput = getByTestId("passwordInput")
    expect(passwordInput).toBeInTheDocument();
    expect(getByText("Username *")).toBeInTheDocument();
  });



  test("shows sign up link", () => {
    const { getByText } = render(<BrowserRouter><SignIn /></BrowserRouter>);
    //const usernameInput = getByTestId("usernameInput")
    const signUpLink = getByText("Don't have an account? Sign Up");
    //console.log(signUpLink)
    expect(signUpLink).toBeInTheDocument();
  });
});
