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

export const ConfirmDeleteDialog = (props: any) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    await props.submit();
    props.close();
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
