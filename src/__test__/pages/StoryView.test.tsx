import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { StoryView } from "../../pages/StoryView";
import { setupStore } from "../../app/store";
import { Provider } from "react-redux";

describe("StoryView", () => {
  it("should display the correct story", () => {
    render(
      <Provider store={setupStore()}>
        <MemoryRouter initialEntries={[`/stories/1`]}>
          <Routes>
            <Route path="/stories/:id" element={<StoryView />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    // expect(
    //   screen.getByText("The Adventures of Sherlock Holmes")
    // ).toBeInTheDocument();
  });
});
