import React, { FC } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import { StoryViewItem } from "../components/story/StoryViewItem";

export const StoryView: FC = () => {
  const { id } = useParams<string>();
  const key: number = Number(id);
  return <div>{<StoryViewItem id={key - 1} />}</div>;
};
