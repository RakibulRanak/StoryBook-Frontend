import { FC } from "react";
import "../../App.css";
import { StoryPreviewItem } from "./StoryPreviewItem";
import { StoryList } from "../../models/story";
import Grid from '@mui/material/Grid';

export const StoryPreviewList: FC<StoryList> = ({ storyList }) => {
  return (
    <Grid container justifyContent="center" sx={{ marginTop: "10vh" }}>
      {storyList.map((story) => (
        <StoryPreviewItem key={story.id} {...story} />
      ))}
    </Grid>
  );
};
