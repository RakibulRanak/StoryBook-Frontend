import React from "react";
import { render } from "@testing-library/react";
import { NotFound } from "../../pages/NotFound";
import { store } from "../../app/store";
import { Provider } from "react-redux";

describe("NotFound", () => {
  test('renders "Page not found" text', () => {
    const { getByText } = render(
      <Provider store={store}>
        {" "}
        <NotFound />
      </Provider>
    );
    expect(getByText("Page not found")).toBeInTheDocument();
  });
});
