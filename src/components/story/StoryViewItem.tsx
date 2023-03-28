import React, { FC } from "react";
import "../../App.css";
import { Story, StoryId } from "../../models/storyModel";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { RootState } from "../../app/store";
import { useEffect } from "react";
import { fetchStoryById } from "../../features/storySlice";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const StoryViewItem: FC<StoryId> = ({ id }) => {
  const {
    loading,
    story: storyData,
    error,
  } = useAppSelector((state: RootState) => state.story);
  console.log(loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("MOUNt");
    dispatch(fetchStoryById({ id }));
  }, []);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (!storyData) {
    return (
      <Typography component="h1" variant="h3" color="inherit">
        Story Not Found
      </Typography>
    );
  }

  const { story, title, author }: Story = storyData;

  return (
    <Box
      sx={{
        position: "relative",
        //p: { xs: 3, md: 6 },
        // pr: { md: 0 },
        marginLeft: "20vw",
        marginRight: "20vw",
        marginBottom: "3vh",
      }}
    >
      <Typography component="h1" variant="h3" color="inherit">
        {title}
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        display="inline"
        gutterBottom
      >
        {author}
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        display="inline"
        style={{ marginLeft: "20px" }}
      >
        {"10 NOV"}
      </Typography>
      <Typography
        variant="body1"
        color="inherit"
        paragraph
        sx={{ marginTop: "20px" }}
      >
        {story}
      </Typography>
    </Box>
  );

};
