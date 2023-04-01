import React, { FC } from "react";
import "../App.css";
import { StoryPreviewList } from "../components/story/StoryPreviewList";
import { useState } from "react";
import { Box } from "@mui/material";
import StoryModal from "../components/story/StoryModal";
import { RootState } from "../app/store";
import { useAppSelector } from "../app/hook";

export const Home: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { loggedIn } = useAppSelector((state: RootState) => state.auth);
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
