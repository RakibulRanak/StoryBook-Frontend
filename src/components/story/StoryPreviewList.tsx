import { FC } from "react";
import "../../App.css";
import { StoryPreviewItem } from "./StoryPreviewItem";
import { StoryList } from "../../models/story";

export const StoryPreviewList: FC<StoryList> = ({ storyList }) => {
  return (
    <div>
      {storyList.map((story) => (
        <StoryPreviewItem key={story.id} {...story} />
      ))}
    </div>
  );
};
