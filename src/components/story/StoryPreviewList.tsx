import { FC } from "react";
import "../../App.css";
import { StoryPreviewItem } from "./StoryPreviewItem";
import Grid from "@mui/material/Grid";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { RootState } from "../../app/store";
import { fetchStories } from "../../features/storySlice";

import { useEffect } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";

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
    <>
      {loading ? (
        <Box sx={{ width: "100%", textAlign: "center", marginTop: "10vh" }}>
          <Typography>Loading...</Typography>
        </Box>

      ) : (
        <Grid container sx={{ marginTop: "10vh" }}>
          {storyList.map((story) => (
            <StoryPreviewItem key={story.id} {...story} />
          ))}
        </Grid>
      )}
    </>
  );
};
