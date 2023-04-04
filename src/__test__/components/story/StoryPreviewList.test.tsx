import { render, screen } from "@testing-library/react";
import { store } from "../../../app/store";
import { Provider } from "react-redux";
import { StoryPreviewList } from "../../../components/story/StoryPreviewList";
import { BrowserRouter } from "react-router-dom";
import storyList from "../../../storage/stories.json"

describe("StoryPreviewList", () => {
    it("renders a loading message when stories are loading", () => {
        render(
            <Provider store={store}>
                <BrowserRouter><StoryPreviewList /></BrowserRouter>
            </Provider>
        );
    });

    it("renders a list of story previews when stories are loaded", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <StoryPreviewList />
                </BrowserRouter>
            </Provider>
        );
        expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(storyList.length);
    });


});
