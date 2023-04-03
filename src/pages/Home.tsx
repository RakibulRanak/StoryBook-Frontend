import React, { FC } from "react";
import "../App.css";
import { StoryPreviewList } from "../components/story/StoryPreviewList";
import { useState } from "react";
import { Box } from "@mui/material";
import StoryModal from "../components/story/StoryModal";
import { RootState } from "../app/store";
import { useAppSelector } from "../app/hook";
import { HomeBox } from "./style";

const HomePostButton: FC<{ setShowModal: (show: boolean) => void }> = ({
  setShowModal,
}) => {
  return (
    <Box mt={5} px={55} sx={{ display: "flex" }}>
      <Box
        py={1.3}
        sx={{ bgcolor: "grey.300", borderRadius: "10px" }}
        onClick={() => setShowModal(true)}
        style={HomeBox}
      >
        Want to post a story?
      </Box>
    </Box>
  );
};

const HomePostModal: FC<{
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}> = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal && (
        <StoryModal
          close={() => {
            setShowModal(false);
            document.getElementById("root")!.style.filter = "none";
          }}
        />
      )}
    </>
  );
};

export const Home: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { loggedIn } = useAppSelector((state: RootState) => state.auth);

  return (
    <Box>
      {loggedIn && <HomePostButton setShowModal={setShowModal} />}
      <HomePostModal showModal={showModal} setShowModal={setShowModal} />
      <Box>
        <StoryPreviewList />
      </Box>
    </Box>
  );
};
