// import { render, screen } from "@testing-library/react";
// import { Provider } from "react-redux";
// import configureStore from "redux-mock-store";
// import { StoryPreviewList } from "../../../components/story/StoryPreviewList";

// const mockStore = configureStore([]);

// describe("StoryPreviewList", () => {
//   it("renders a loading message when stories are loading", () => {
//     const loading = true;
//     const store = mockStore({
//       story: { loading, storyList: [], error: null },
//     });
//     render(
//       <Provider store={store}>
//         <StoryPreviewList />
//       </Provider>
//     );
//     // expect(screen.getByText("Stories are loading!!!")).toBeInTheDocument();
//   });

//   // it("renders a list of story previews when stories are loaded", () => {
//   //   const storyList = [
//   //     {
//   //       id: 1,
//   //       title: "Test Story 1",
//   //       author: "Test Author 1",
//   //       createdAt: "2022-01-01T00:00:00.000Z",
//   //       imageUrl: "http://example.com/test1.jpg",
//   //     },
//   //     {
//   //       id: 2,
//   //       title: "Test Story 2",
//   //       author: "Test Author 2",
//   //       createdAt: "2022-02-01T00:00:00.000Z",
//   //       imageUrl: "http://example.com/test2.jpg",
//   //     },
//   //   ];
//   //   const store = mockStore({
//   //     story: { loading: false, storyList, error: null },
//   //   });
//   //   render(
//   //     <Provider store={store}>
//   //       <StoryPreviewList />
//   //     </Provider>
//   //   );

//   //   expect(screen.getAllByRole("article")).toHaveLength(storyList.length);
//   // });

//   // it("renders an error message when there is an error loading stories", () => {
//   //   const error = "Failed to load stories";
//   //   const store = mockStore({
//   //     story: { loading: false, storyList: [], error },
//   //   });
//   //   render(
//   //     <Provider store={store}>
//   //       <StoryPreviewList />
//   //     </Provider>
//   //   );
//   //   expect(screen.getByText(error)).toBeInTheDocument();
//   // });
// });
export {};
