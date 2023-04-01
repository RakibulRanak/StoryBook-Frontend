import React, { FC, useState } from "react";
import Edit from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppSelector } from "../../app/hook";
import { RootState } from "../../app/store";
import StoryModal from "./StoryModal";
import { ConfirmDeleteDialog } from "../generic/ConfirmDeleteDialog";
import { Story } from "../../models/storyModel";

const AuthenticatedStoryActions: FC<Story> = ({ author, id, title, story }) => {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const { username, loggedIn } = useAppSelector(
    (state: RootState) => state.auth
  );

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleDeleteClick = () => {
    setOpen(true);
  };

  return (
    <>
      {loggedIn && username === author && (
        <>
          <Edit
            onClick={handleEditClick}
            sx={{ marginTop: "1.3vh", marginLeft: "2vw" }}
          ></Edit>
          {showModal && (
            <StoryModal
              close={() => {
                setShowModal(false);
                document.getElementById("root")!.style.filter = "none";
              }}
              id={id}
              title={title}
              story={story}
            />
          )}
          <DeleteIcon
            onClick={handleDeleteClick}
            sx={{ marginTop: "1.3vh", marginLeft: "1vw" }}
          ></DeleteIcon>
          {open && (
            <ConfirmDeleteDialog
              close={() => {
                setOpen(false);
              }}
              id={id}
            ></ConfirmDeleteDialog>
          )}
        </>
      )}
    </>
  );
};

export default AuthenticatedStoryActions;
