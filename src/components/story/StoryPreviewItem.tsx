import React, { FC } from "react";
import { Typography, Box } from "@mui/material";
import { Story } from "../../models/storyModel";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import AuthenticatedStoryActions from "./AuthenticatedStoryActions";

export const StoryPreviewItem: FC<Story> = (storyData) => {
  const { title, story, author, id, postedAt } = storyData;
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        marginLeft: "23vw",
        marginRight: "23vw",
        marginBottom: "3vh",
        textAlign: "left",
      }}
    >
      <Box display="flex">
        <Typography
          data-testid="storyPreviewItem"
          onClick={() => navigate(`/stories/${id}`)}
          component="h1"
          variant="h3"
          color="inherit"
        >
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
      <Box sx={{ marginTop: "20px", overflow: "hidden" }}>
        <Typography
          component="h2"
          variant="body2"
          color="inherit"
          paragraph
          className="classes.heading"
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            maxWidth: "100%",
            textOverflow: "ellipsis",
          }}
        >
          {story}
        </Typography>
      </Box>
    </Box>
  );
};
