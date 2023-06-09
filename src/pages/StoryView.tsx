import React, { FC } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import { StoryViewItem } from "../components/story/StoryViewItem";
import Grid from "@mui/material/Grid";

export const StoryView: FC = () => {
  const { id } = useParams<string>();
  const key: number = Number(id);
  return (
    <Grid container justifyContent="center" sx={{ marginTop: "10vh" }}>
      <StoryViewItem id={key} />
    </Grid>
  );
};
