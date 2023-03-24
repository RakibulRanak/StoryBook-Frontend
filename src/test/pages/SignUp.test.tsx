import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { SignUp } from "../../pages/SignUp";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect"

describe("SignUp component", () => {

  const setupTest = (): void => {
    render(<BrowserRouter><SignUp /></BrowserRouter>);
  }

  test("renders correctly", () => {
    setupTest();
    expect(screen.getByTestId("usernameInput")).toBeInTheDocument();
    expect(screen.getByTestId("passwordInput")).toBeInTheDocument();
    expect(screen.getByTestId("nameInput")).toBeInTheDocument();
    expect(screen.getByTestId("emailInput")).toBeInTheDocument();
    expect(screen.getByTestId("confirmPasswordInput")).toBeInTheDocument();
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
    expect(window.location.pathname).toBe('/signin');
  });
});

