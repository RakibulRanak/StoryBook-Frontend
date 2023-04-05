import React, { FC } from "react";
import {
  Button,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hook";
import { signIn } from "../../features/authSlice";
import { useState, useEffect } from "react";
import { FormInputField } from "../generic/FormInputField";

export const SignInForm: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (username && username.trim() && password && password.trim())
      setDisable(false);
    else setDisable(true);
  }, [username, password]);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(signIn({ username, password }));
    console.log({ username, password });
    navigate("/");
  };
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormInputField
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormInputField
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={disable}
      >
        Sign In
      </Button>
      <Grid container justifyContent="center">
        <Grid item onClick={() => navigate("/signup")}>
          <Typography
            variant="body2"
            color="primary"
            sx={{ textDecoration: "underline", cursor: "pointer" }}
          >
            Don't have an account? Sign Up
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
