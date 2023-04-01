import { FC, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material/";
import { useAppDispatch } from "../../app/hook";
import { deleteStory } from "../../features/storySlice";
import { useNavigate } from "react-router-dom";

export const ConfirmDeleteDialog = (props: any) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    //setOpen(false)
    props.close();
    dispatch(deleteStory(props.id));
    navigate("/");
  };

  return (
    <div>
      <Dialog
        open={true}
        onClose={props.close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="secondary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
