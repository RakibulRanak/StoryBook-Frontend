import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Story } from "../../models/storyModel";
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import ShowMoreText from 'react-show-more-text';
import ExpandLess from "@mui/material";
import ExpandMore from "@mui/material";

export const StoryPreviewItem: FC<Story> = ({ title, story, author, id, postedAt }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        marginLeft: "23vw",
        marginRight: "23vw",
        marginBottom: "3vh",
        textAlign: "left"
      }}
    >
      <Typography
        data-testid="storyPreviewItem"
        onClick={() => navigate(`/stories/${id}`)}
        component="h1"
        variant="h3"
        color="inherit"
      >
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
        {format(new Date(postedAt), 'MMMM dd, yyyy')}
      </Typography>
      <Box sx={{ marginTop: "20px" }}>
        <ShowMoreText
          lines={3}

          more={
            <span>
              {' '}
              <b>See more</b>
            </span>
          }
          less={
            <span>
              {' '}
              <b>See less</b>
            </span>
          }
        >
          <Typography
            component="h2"
            variant="body1"
            color="inherit"
            paragraph
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 8,
            }}
          >
            {story}
          </Typography>

        </ShowMoreText>
      </Box>

    </Box >
  );
};
