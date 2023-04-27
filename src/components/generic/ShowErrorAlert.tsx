import React, { FC } from "react";

import { Alert, Snackbar } from "@mui/material";

export const ShowErrorAlert: FC<{ message: string }> = (prop) => {
  const [open, setOpen] = React.useState(true);
  return (
    <Snackbar
      sx={{ height: "100%" }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={open}
      onClose={() => setOpen(false)}
      autoHideDuration={3000}
    >
      <Alert severity="warning">{prop.message}</Alert>
    </Snackbar>
  );
};
