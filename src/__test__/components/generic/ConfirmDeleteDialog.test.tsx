import React from "react";
import { ConfirmDeleteDialog } from "../../../components/generic/ConfirmDeleteDialog";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const close = jest.fn();
const submit = jest.fn();

describe("Render StoryModal", () => {
  const setUpTest = (): void => {
    render(
      <BrowserRouter>
        <ConfirmDeleteDialog close={close} submit={submit} />
      </BrowserRouter>
    );
  };

  test("Successful Render, Submit button calling, and auto close of ConfirmDeleteDialog", async () => {
    setUpTest();
    const deleteButton = screen.getByText("Delete");
    expect(deleteButton).toBeInTheDocument();
    await waitFor(() => fireEvent.click(deleteButton));
    expect(submit).toHaveBeenCalled();
    expect(close).toHaveBeenCalled();
  });

  test("Render and Close of ConfirmDeleteDialog", async () => {
    setUpTest();
    const closeButton = screen.getByText("Cancel");
    expect(closeButton).toBeInTheDocument();
    fireEvent.click(closeButton);
    expect(close).toHaveBeenCalled();
  });
});
