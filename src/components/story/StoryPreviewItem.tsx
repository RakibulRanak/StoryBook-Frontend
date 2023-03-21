import React, { FC } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { Story } from "../../models/story";

export const StoryPreviewItem: FC<Story> = ({ title, story, author, id }) => {
  return (
    <div className="App">
      <Link
        to={`/stories/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <h1>{title}</h1>
      </Link>
      <h2>{author}</h2>
      {story}
    </div>
  );
};
