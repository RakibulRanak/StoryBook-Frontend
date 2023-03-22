import React, { FC } from 'react';
import '../../App.css'
import storyData from '../../storage/stories.json'
import { Story, StoryId } from '../../models/story';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const StoryViewItem: FC<StoryId> = ({ id }) => {
  if (!storyData[id]) {
    return (
      <Typography component="h1" variant="h3" color="inherit">
        Story Not Found
      </Typography>
    );
  }

  const { story, title, author }: Story = storyData[id];

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
      <Typography component="h1" variant="h3" color="inherit">
        {title}
      </Typography>
      <Typography variant="h6" color="text.secondary" display="inline" gutterBottom>
        {author}
      </Typography>
      <Typography variant="h6" color="text.secondary" display="inline" style={{ marginLeft: '20px' }}>
        {"10 NOV"}
      </Typography>
      <Typography variant="h5" color="inherit" paragraph sx={{ marginTop: '20px' }}>
        {story}
      </Typography>
    </Box>
  );
};

