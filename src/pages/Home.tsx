import React, { FC } from "react";
import "../App.css";
import { StoryPreviewList } from "../components/story/StoryPreviewList";

export const Home: FC = () => {
  return (
    <div>
      <StoryPreviewList />
    </div>
  );
};
