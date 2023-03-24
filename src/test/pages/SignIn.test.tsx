import React from "react";
import { render, fireEvent, screen, getByText } from "@testing-library/react";
import { SignIn } from "../../pages/SignIn";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect"

describe("SignIn component", () => {

  const setupTest = (): void => {
    render(<BrowserRouter><SignIn /></BrowserRouter>)
  }

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
    expect(window.location.pathname).toBe('/signup');
  });
});
