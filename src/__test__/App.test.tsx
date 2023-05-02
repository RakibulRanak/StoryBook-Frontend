import { render } from "@testing-library/react";
import { App } from "../App";
import { Provider } from "react-redux";
import { setupStore } from "../app/store";

test("renders learn react link", () => {
  render(
    <Provider store={setupStore()}>
      <App />
    </Provider>
  );
});
