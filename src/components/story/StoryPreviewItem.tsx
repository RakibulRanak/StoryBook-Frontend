import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Story } from "../../models/storyModel";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import Edit from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import StoryModal from "./StoryModal";
import { useState } from "react";

export const StoryPreviewItem: FC<Story> = ({
  title,
  story,
  author,
  id,
  postedAt,
}) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

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
        <Edit onClick={() => setShowModal(true)} sx={{ marginTop: "1.3vh", marginLeft: "2vw" }}>

        </Edit>
        {showModal && (
          <StoryModal
            close={() => {
              setShowModal(false);
              document.getElementById(
                'root'
              )!.style.filter = 'none';
            }}
            storyId={id}
            title={title}
            story={story}
          />
        )}
        <DeleteIcon sx={{ marginTop: "1.3vh", marginLeft: "1vw" }}></DeleteIcon>
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
