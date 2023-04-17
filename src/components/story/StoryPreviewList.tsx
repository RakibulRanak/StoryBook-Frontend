import React, { FC, useState } from "react";
import "../../App.css";
import { StoryPreviewItem } from "./StoryPreviewItem";
import { Box, Grid, Typography } from "@mui/material";
import { useStoriesQuery } from "../../services/storyApi";

export const StoryPreviewList: FC = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useStoriesQuery();

  const renderLoading = () => (
    <Box sx={{ width: "100%", textAlign: "center", marginTop: "10vh" }}>
      <Typography>Loading...</Typography>
    </Box>
  );

  const renderStoryPreviews = () => (
    <Grid container sx={{ marginTop: "10vh" }}>
      {data?.data.map((story) => (
        <StoryPreviewItem key={story.id} {...story} />
      ))}
    </Grid>
  );

  return <>{isLoading ? renderLoading() : renderStoryPreviews()}</>;
};
