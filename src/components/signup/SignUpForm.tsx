import React, { FC, useState, useEffect } from "react";
import { Button, TextField, Grid, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hook";

import { FormInputField } from "../generic/FormInputField";
import { useSignUpMutation } from "../../services/authApi";

export const SignUpForm: FC = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [disable, setDisable] = useState(false);
  const [signUp, { data, isSuccess, isError, error }] = useSignUpMutation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (
      username &&
      username.trim() &&
      password &&
      password.trim() &&
      confirmPassword &&
      confirmPassword.trim() &&
      email &&
      email.trim() &&
      name &&
      name.trim()
    )
      setDisable(false);
    else setDisable(true);
  }, [username, password, name, email, confirmPassword]);

  useEffect(() => {
    if (isSuccess) {
      console.log("successful");
      navigate("/signin");
    }
  }, [isSuccess]);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await signUp({ email, password, username, confirmPassword, name });
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormInputField
            onChange={(event) => setName(event.target.value)}
            label="Name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormInputField
            onChange={(e) => setUsername(e.target.value)}
            label="Username"
          />
        </Grid>
        <Grid item xs={12}>
          <FormInputField
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
          />
        </Grid>
        <Grid item xs={12}>
          <FormInputField
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
          />
        </Grid>
        <Grid item xs={12}>
          <FormInputField
            onChange={(e) => setConfirmPassword(e.target.value)}
            label="Confirm Password"
          />
        </Grid>
      </Grid>
      <Button
        disabled={disable}
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign Up
      </Button>
      <Grid container justifyContent="center">
        <Grid item onClick={() => navigate("/signin")}>
          <Typography
            variant="body2"
            color="primary"
            sx={{ textDecoration: "underline", cursor: "pointer" }}
          >
            Already have an account? Sign in
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
