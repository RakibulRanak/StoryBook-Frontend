import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material/";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { ShowErrorAlert } from "./ShowErrorAlert";
import { useState } from "react";

export const ConfirmDeleteDialog = (props: any) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleDelete = async () => {
    try {
      await props.submit();
      props.close();
      navigate("/");
    } catch (e) {
      setError("Something Went Wrong! Try Again Later");
      setTimeout(() => props.close(), 3000);
    }
  };

  if (error) return <ShowErrorAlert message={error} />;

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
          <LoadingButton
            loadingIndicator="Deleting..."
            loading={props.isLoading}
            onClick={handleDelete}
            color="secondary"
            autoFocus
          >
            Delete
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};
