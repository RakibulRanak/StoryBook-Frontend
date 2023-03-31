import React, { FC, useState } from "react";
import "../../App.css";
import { Story, StoryId } from "../../models/storyModel";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { RootState } from "../../app/store";
import { useEffect } from "react";
import { fetchStoryById } from "../../features/storySlice";
import Typography from "@mui/material/Typography";
import { format } from "date-fns";
import Box from "@mui/material/Box";
import AuthenticatedStoryActions from "./AuthenticatedStoryActions";

export const StoryViewItem: FC<StoryId> = ({ id }) => {
  const { story: storyData } = useAppSelector(
    (state: RootState) => state.story
  );
  const [loading, setLoading] = useState(true);

  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("MOUNt");
    dispatch(fetchStoryById(id));
    setLoading(false);
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
  const { story, title, author, postedAt }: Story = storyData;

  return (
    <Box
      sx={{
        position: "relative",
        marginLeft: "20vw",
        marginRight: "20vw",
        marginBottom: "3vh",
      }}
    >
      <Box display="flex">
        <Typography component="h1" variant="h3" color="inherit">
          {title}
        </Typography>
        <AuthenticatedStoryActions {...storyData} />
      </Box>
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
        {format(new Date(postedAt), "MMMM dd, yyyy")}
      </Typography>
      <Typography
        variant="body1"
        color="inherit"
        paragraph
        sx={{ marginTop: "20px" }}
      >
        {story}
      </Typography>
    </Box >
  );
};
