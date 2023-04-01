import React, { FC } from "react";
import {
  Button,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hook";
import { signIn } from "../features/authSlice";
import { useState, useEffect } from "react";

export const SignIn: FC = () => {
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
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            data-testid="usernameInput"
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            data-testid="passwordInput"
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
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
      </Box>
    </Container>
  );
};
