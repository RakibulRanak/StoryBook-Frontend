import { FC, useState } from "react";
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
  const { storyList } = useAppSelector((state: RootState) => state.story);
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchStories());
    setLoading(false);
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
