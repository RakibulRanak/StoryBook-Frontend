import React, { FC } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Story } from "../../models/story";
import { useNavigate } from "react-router-dom";

export const StoryPreviewItem: FC<Story> = ({ title, story, author, id }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        position: 'relative',
        //p: { xs: 3, md: 6 },
        // pr: { md: 0 },
        marginLeft: '20vw',
        marginRight: '20vw',
        marginBottom: '3vh'
      }}
    >
      <Typography data-testid="storyPreviewItem" onClick={() => navigate(`/stories/${id}`)} component="h1" variant="h3" color="inherit">
        {title}
      </Typography>
      <Typography variant="h6" color="text.secondary" display="inline" gutterBottom>
        {author}
      </Typography>
      <Typography variant="h6" color="text.secondary" display="inline" style={{ marginLeft: '20px' }}>
        {"10 NOV"}
      </Typography>
      <Typography component="h2" variant="h5" color="inherit" paragraph sx={{ marginTop: '20px' }}>
        {story}
      </Typography>
    </Box>
  );
};
