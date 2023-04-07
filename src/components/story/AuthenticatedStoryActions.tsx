import React, { FC, useState } from "react";
import Edit from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppSelector, useAppDispatch } from "../../app/hook";
import { RootState } from "../../app/store";
import { StoryModal } from "./StoryModal";
import { ConfirmDeleteDialog } from "../generic/ConfirmDeleteDialog";
import { Story } from "../../models/storyModel";
import { deleteStory } from "../../features/storySlice";

export const AuthenticatedStoryActions: FC<Story> = ({
  author,
  id,
  title,
  story,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { username, loggedIn } = useAppSelector(
    (state: RootState) => state.auth
  );
  const renderEditButton = () => (
    <Edit
      onClick={() => setShowModal(true)}
      sx={{ marginTop: "1.3vh", marginLeft: "2vw" }}
    />
  );

  const renderStoryModal = () => {
    return (
      <StoryModal
        close={() => {
          setShowModal(false);
          document.getElementById("root")!.style.filter = "none";
        }}
        id={id}
        title={title}
        story={story}
      />
    );
  };

  const renderDeleteButton = () => (
    <DeleteIcon
      onClick={() => setOpen(true)}
      sx={{ marginTop: "1.3vh", marginLeft: "1vw" }}
    />
  );

  const renderDeleteDialog = () => (
    <ConfirmDeleteDialog
      close={() => {
        setOpen(false);
      }}
      submit={() => {
        dispatch(deleteStory(id));
      }}
      id={id}
    />
  );

  return (
    <>
      {loggedIn && username === author && (
        <>
          {renderEditButton()}
          {showModal && renderStoryModal()}
          {renderDeleteButton()}
          {open && renderDeleteDialog()}
        </>
      )}
    </>
  );
};
