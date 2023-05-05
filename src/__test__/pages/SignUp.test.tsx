import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { SignUp } from "../../pages/SignUp";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "../../app/store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../test-utils";

describe("SignUp component", () => {
  test("renders correctly", () => {
    renderWithProviders(<SignUp />);
    expect(screen.getByTestId("usernameInput")).toBeInTheDocument();
    expect(screen.getByTestId("passwordInput")).toBeInTheDocument();
    expect(screen.getByTestId("nameInput")).toBeInTheDocument();
    expect(screen.getByTestId("emailInput")).toBeInTheDocument();
    expect(screen.getByTestId("confirmpasswordInput")).toBeInTheDocument();
  });

  test("shows sign in link", () => {
    renderWithProviders(<SignUp />);
    const signInLink = screen.getByText("Already have an account? Sign in");
    expect(signInLink).toBeInTheDocument();
  });

  test("Go to Sign in page when clicked", () => {
    renderWithProviders(<SignUp />);
    const signInLink = screen.getByText("Already have an account? Sign in");
    expect(signInLink).toBeInTheDocument();
    fireEvent.click(signInLink);
    expect(window.location.pathname).toBe("/signin");
  });

  test("Go to sign in page automatically when sign up completed", async () => {
    renderWithProviders(<SignUp />);
    fireEvent.change(screen.getByLabelText("Name *"), {
      target: { value: "John Doe" },
    });

    fireEvent.change(screen.getByLabelText("Username *"), {
      target: { value: "johndoe" },
    });

    fireEvent.change(screen.getByLabelText("Email *"), {
      target: { value: "johndoe@examplecom" },
    });

    fireEvent.change(screen.getByLabelText("Password *"), {
      target: { value: "password" },
    });

    fireEvent.change(screen.getByLabelText("Confirm Password *"), {
      target: { value: "password" },
    });
    fireEvent.submit(screen.getByRole("button", { name: "Sign Up" }));
    await waitFor(() => {
      expect(window.location.pathname).toBe("/signin");
    });
  });
});
