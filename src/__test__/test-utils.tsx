import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupStore } from "../app/store";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { BrowserRouter } from "react-router-dom";

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  setupListeners(store.dispatch);

  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
