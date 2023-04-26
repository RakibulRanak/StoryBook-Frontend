import React, { FC } from "react";
import "../../App.css";
import { StoryPreviewItem } from "./StoryPreviewItem";
import { Box, Grid, Typography, LinearProgress } from "@mui/material";
import { useStoriesQuery } from "../../services/storyApi";

export const StoryPreviewList: FC = () => {
  const { data, isFetching } = useStoriesQuery();

  const renderLoading = () => (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
        marginTop: "10vh",
        paddingX: "30vw",
        paddingY: 25,
      }}
    >
      <LinearProgress />
    </Box>
  );

  const renderStoryPreviews = () => (
    <Grid container sx={{ marginTop: "10vh" }}>
      {data?.data.map((story) => (
        <StoryPreviewItem key={story.id} {...story} />
      ))}
    </Grid>
  );

  return <>{isFetching ? renderLoading() : renderStoryPreviews()}</>;
};
