import React, { FC } from "react";
import {
  Avatar,
  Typography,
  Container,
} from "@mui/material";
import { SignInForm } from "../components/signin/SignInForm";
import { ParentFormBox } from "./style";

export const SignIn: FC = () => {
  return (
    <Container component="main" maxWidth="xs">
      <ParentFormBox>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <SignInForm></SignInForm>
      </ParentFormBox>
    </Container>
  );
};
