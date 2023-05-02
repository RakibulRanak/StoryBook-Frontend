import React, { FC, useEffect } from "react";
import { Avatar, Typography, Container } from "@mui/material";
import { SignUpForm } from "../components/signup/SignUpForm";
import { ParentFormBox } from "./style";

export const SignUp: FC = () => {
  return (
    <Container component="main" maxWidth="xs">
      <ParentFormBox>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <SignUpForm></SignUpForm>
      </ParentFormBox>
    </Container>
  );
};
