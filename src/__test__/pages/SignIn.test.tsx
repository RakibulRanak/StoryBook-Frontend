import React from "react";
import {
  fireEvent,
  screen,
  waitFor,
} from "@testing-library/react";
import { SignIn } from "../../pages/SignIn";
import { renderWithProviders } from "../test-utils";
import "@testing-library/jest-dom/extend-expect";

describe("SignIn component", () => {
  test("renders correctly", () => {
    renderWithProviders(<SignIn />);
    expect(screen.getByTestId("usernameInput")).toBeInTheDocument();
    expect(screen.getByTestId("passwordInput")).toBeInTheDocument();
    expect(screen.getByText("Username *")).toBeInTheDocument();
  });

  test("shows sign up link", () => {
    renderWithProviders(<SignIn />);
    const signUpLink = screen.getByText("Don't have an account? Sign Up");
    expect(signUpLink).toBeInTheDocument();
  });

  test("Go to Sign up page when clicked", () => {
    renderWithProviders(<SignIn />);
    const signUpLink = screen.getByText("Don't have an account? Sign Up");
    expect(signUpLink).toBeInTheDocument();
    fireEvent.click(signUpLink);
    expect(window.location.pathname).toBe("/signup");
  });

  test("Go to homepage  when submit button is clicked/ successfully logged in", async () => {
    renderWithProviders(<SignIn />);
    fireEvent.change(screen.getByLabelText("Username *"), {
      target: { value: "johndoe" },
    });

    fireEvent.change(screen.getByLabelText("Password *"), {
      target: { value: "password" },
    });

    fireEvent.submit(screen.getByRole("button", { name: "Sign In" }));
    await waitFor(() => {
      expect(window.location.pathname).toBe("/");
    });
  });
});
