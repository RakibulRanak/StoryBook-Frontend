import React, { FC } from "react";
import "../../App.css";
import { Story } from "../../models/storyModel";
import { Typography, Box } from "@mui/material";
import { AuthenticatedStoryActions } from "./AuthenticatedStoryActions";
import { ParentStoryBox } from "./style";
import { useStoryQuery } from "../../services/storyApi";

export const StoryViewItem: FC<{ id: number }> = ({ id }) => {
  const { data, isLoading } = useStoryQuery(id);
  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }
  if (!data) {
    return (
      <Typography component="h1" variant="h3" color="inherit">
        Story Not Found
      </Typography>
    );
  }
  const { story, title, author, postedAt }: Story = data.data;

  return (
    <ParentStoryBox>
      <Box display="flex">
        <Typography component="h1" variant="h3" color="inherit">
          {title}
        </Typography>
        <AuthenticatedStoryActions {...data.data} />
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
        {new Date(postedAt).toLocaleString()}
      </Typography>
      <Typography
        variant="body1"
        color="inherit"
        paragraph
        sx={{ marginTop: "20px" }}
      >
        {story}
      </Typography>
    </ParentStoryBox>
  );
};
