import React, { FC } from "react";
import { Button, Grid, Box, Typography, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hook";
import { setUser } from "../../features/authSlice";
import { useState, useEffect } from "react";
import { FormInputField } from "../generic/FormInputField";
import { useSignInMutation } from "../../services/authApi";
import { LoadingButton } from "@mui/lab";

export const SignInForm: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false);
  const [myError, setMyError] = useState("");
  const [signIn, { isLoading }] = useSignInMutation();

  useEffect(() => {
    if (username && username.trim() && password && password.trim())
      setDisable(false);
    else setDisable(true);
  }, [username, password]);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await signIn({ username, password })
        .unwrap()
        .then((data) => {
          dispatch(
            setUser({
              username,
              loggedIn: true,
              access_token: data?.data.access_token,
              refresh_token: data?.data.refresh_token,
            })
          );
          navigate("/");
        });
    } catch (err: any) {
      console.log(err);
      setMyError(err.data.message);
    }
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
      </Grid>
      <Box mt={2}>{myError && <Alert severity="error">{myError}</Alert>}</Box>
      <LoadingButton
        type="submit"
        loadingIndicator="Sigining In..."
        fullWidth
        variant="contained"
        loading={isLoading}
        sx={{ mt: 3, mb: 2 }}
        disabled={disable}
      >
        Sign In
      </LoadingButton>
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
