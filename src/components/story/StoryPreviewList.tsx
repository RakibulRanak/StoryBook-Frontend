import React, { FC } from "react";
import "../../App.css";
import { StoryPreviewItem } from "./StoryPreviewItem";
import { Box, Grid, LinearProgress } from "@mui/material";
import { useStoriesQuery } from "../../services/storyApi";
import { StoriesResponse } from "../../models/storyModel";
import { ShowErrorAlert } from "../generic/ShowErrorAlert";

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

const renderStoryPreviews = (data: StoriesResponse) => (
  <Grid container sx={{ marginTop: "10vh" }}>
    {data?.data.map((story) => (
      <StoryPreviewItem key={story.id} {...story} />
    ))}
  </Grid>
);

export const StoryPreviewList: FC = () => {
  const { data, isFetching, isError, error } = useStoriesQuery();

  if (isError && "status" in error)
    return <ShowErrorAlert message="Something Went Wrong Fetching Data!" />;

  return <>{isFetching ? renderLoading() : renderStoryPreviews(data!)}</>;
};
