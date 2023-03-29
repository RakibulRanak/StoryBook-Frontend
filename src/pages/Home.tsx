import React, { FC } from "react";
import "../App.css";
import { StoryPreviewList } from "../components/story/StoryPreviewList";
import { useState } from "react";
import { Box, Container, Button } from "@mui/material";
import StoryModal from "../components/story/StoryModal";
import { text } from "stream/consumers";
import { textAlign } from "@mui/system";

const loggedIn = true;
export const Home: FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Box>
      {loggedIn && (
        <Box mt={5} px={55} sx={{ display: "flex" }}>
          <Box
            py={1.3}
            sx={{ bgcolor: "grey.300", borderRadius: "10px" }}
            onClick={() => setShowModal(true)}
            style={{
              margin: "auto",
              width: "100%",
              textAlign: "center",
            }}
          >
            Want to post a story?
          </Box>
        </Box>
      )}
      {showModal && (
        <StoryModal
          close={() => {
            setShowModal(false);
            document.getElementById("root")!.style.filter = "none";
          }}
        />
      )}
      <Box>
        <StoryPreviewList />
      </Box>
    </Box>
  );
};
