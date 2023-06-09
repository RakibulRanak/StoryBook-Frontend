import React, { FC, useState } from "react";
import Edit from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppSelector } from "../../app/hook";
import { RootState } from "../../app/store";
import { StoryModal } from "./StoryModal";
import { ConfirmDeleteDialog } from "../generic/ConfirmDeleteDialog";
import { Story } from "../../models/storyModel";
import {
  useDeleteStoryMutation,
  useStoriesQuery,
} from "../../services/storyApi";

export const AuthenticatedStoryActions: FC<Story> = ({
  author,
  id,
  title,
  story,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [deleteStory, { isLoading }] = useDeleteStoryMutation();
  const { refetch } = useStoriesQuery();
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
      submit={async () => {
        await deleteStory(id).unwrap();
        await refetch();
      }}
      id={id}
      isLoading={isLoading}
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
