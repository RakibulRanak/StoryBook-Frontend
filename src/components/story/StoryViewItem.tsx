import React, { FC, useState } from "react";
import "../../App.css";
import { Story, StoryId } from "../../models/storyModel";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { RootState } from "../../app/store";
import { useEffect } from "react";
import { fetchStoryById } from "../../features/storySlice";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Edit from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import StoryModal from "./StoryModal";
import { ConfirmDeleteDialog } from "../generic/ConfirmDeleteDialog";


export const StoryViewItem: FC<StoryId> = ({ id }) => {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
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

      <Box display="flex">
        <Typography component="h1" variant="h3" color="inherit">
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
        <DeleteIcon onClick={() => setOpen(true)} sx={{ marginTop: "1.3vh", marginLeft: "1vw" }}></DeleteIcon>
        {open && <ConfirmDeleteDialog close={() => {
          setOpen(false)
        }} storyId={id}></ConfirmDeleteDialog>}
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
    </Box >
  );
};
