import React from "react";
import { render, fireEvent, screen, getByText } from "@testing-library/react";
import { SignUp } from "../../pages/SignUp";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect"

describe("SignUp component", () => {
  test("renders correctly", () => {
    const { getByTestId, getByText } = render(<BrowserRouter><SignUp /></BrowserRouter>);
    expect(getByTestId("usernameInput")).toBeInTheDocument();
    expect(getByTestId("passwordInput")).toBeInTheDocument();
    expect(getByTestId("nameInput")).toBeInTheDocument();
    expect(getByTestId("emailInput")).toBeInTheDocument();
    expect(getByTestId("confirmPasswordInput")).toBeInTheDocument();
    //expect(getByText("Username *")).toBeInTheDocument();
  });



  test("shows sign in link", () => {
    const { getByText } = render(<BrowserRouter><SignUp /></BrowserRouter>);
    //const usernameInput = getByTestId("usernameInput")
    const signInLink = getByText("Already have an account? Sign in");
    //console.log(signUpLink)
    expect(signInLink).toBeInTheDocument();
  });
});
