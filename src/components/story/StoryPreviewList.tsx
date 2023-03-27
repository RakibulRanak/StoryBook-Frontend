import { FC } from "react";
import "../../App.css";
import { StoryPreviewItem } from "./StoryPreviewItem";
import Grid from "@mui/material/Grid";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { RootState } from "../../app/store";
import { fetchStories } from "../../features/storySlice";

import { useEffect } from "react";

export const StoryPreviewList: FC = () => {
  const { loading, storyList, error } = useAppSelector(
    (state: RootState) => state.story
  );
  console.log(loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("MOUNt");
    dispatch(fetchStories());
  }, []);

  return (
    <Grid container justifyContent="center" sx={{ marginTop: "10vh" }}>
      {loading ? (
        <>Stories are loading!!!</>
      ) : (
        <>
          {storyList.map((story) => (
            <StoryPreviewItem key={story.id} {...story} />
          ))}
        </>
      )}
    </Grid>
  );
};
