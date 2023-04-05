// import React from "react";
// import StoryModal from "../../../components/story/StoryModal";
// import { store } from "../../../app/store";
// import { Provider } from "react-redux";
// import ReactDom from "react-dom";
// import "@testing-library/jest-dom/extend-expect";
// //import { render } from "@testing-library/react";
// import { render } from "react-dom";

// // Mock getElementById to return a fake element
// beforeAll(() => {
//   jest.mock("react-dom", () => {
//     return {
//       render: jest.fn(),
//     };
//   });
// });

// describe("Render StoryModal", () => {
//   const setUpTest = (): void => {
//     render(
//       <Provider store={store}>
//         <StoryModal close={() => console.log("hi")} id={1} />
//       </Provider>,
//       document.getElementById("div")
//     );
//   };
//   test("render StoryModal with nothing", () => {
//     setUpTest();
//     expect(1).toBe(1);
//   });
// });
export {};
