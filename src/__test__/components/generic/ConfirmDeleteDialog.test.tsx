import React from "react";
import { ConfirmDeleteDialog } from "../../../components/generic/ConfirmDeleteDialog";
import { store } from "../../../app/store";
import { Provider } from "react-redux";
import ReactDom from "react-dom";
import "@testing-library/jest-dom/extend-expect";
//import { render } from "@testing-library/react";
import { render, screen, fireEvent } from "@testing-library/react";
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

  test("Successful Render and Close of ConfirmDeleteDialog", () => {
    setUpTest();
    const deleteButton = screen.getByText("Delete");
    expect(deleteButton).toBeInTheDocument();
    fireEvent.click(deleteButton);
    expect(close).toHaveBeenCalled();
    expect(submit).toHaveBeenCalled();
  });
});
