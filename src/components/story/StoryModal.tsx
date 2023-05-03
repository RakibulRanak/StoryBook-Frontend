import React, { FC } from "react";
import { Box, TextareaAutosize, Button } from "@mui/material";
import { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { my_modal, text_area } from "./style";
import { LoadingButton } from "@mui/lab";
import { ShowErrorAlert } from "../generic/ShowErrorAlert";
import {
  useAddStoryMutation,
  useUpdateStoryMutation,
} from "../../services/storyApi";

interface StoryModalProps {
  title?: string;
  story?: string;
  id?: number;
  close: () => void;
}

export const StoryModal: FC<StoryModalProps> = (props) => {
  const [title, setTitle] = useState(props.title || "");
  const [story, setStory] = useState(props.story || "");
  const [disable, setDisable] = useState(true);
  const [error, setError] = useState("");
  const [addStory, { isLoading: isPostStoryLoading }] = useAddStoryMutation();
  const [updateStory, { isLoading: isUpdateStoryLoading }] =
    useUpdateStoryMutation();
  document.getElementById("root")!.style.filter = "blur(3px)";

  useEffect(() => {
    if (story && story.trim() && title && title.trim()) setDisable(false);
    else setDisable(true);
  }, [story, title]);

  const handlePostSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      setDisable(true);
      await addStory({ title, story }).unwrap();
      setTitle("");
      setStory("");
      props.close();
    } catch (e) {
      setError("Something Went Wrong! Try Again Later");
      setTimeout(() => props.close(), 3000);
    }
  };

  const handleUpdateSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      setDisable(true);
      await updateStory({ id: props.id!, title, story }).unwrap();
      props.close();
    } catch (e) {
      setError("Something Went Wrong! Try Again Later");
      setTimeout(() => props.close(), 3000);
    }
  };

  if (error) {
    document.getElementById("root")!.style.filter = "none";
    return <ShowErrorAlert message={error} />;
  }

  return ReactDom.createPortal(
    <Box sx={my_modal}>
      <Box pt={5}>
        <TextareaAutosize
          minRows={2}
          placeholder="Title"
          id="outlined-multiline-static"
          data-testid="title"
          style={{ resize: "vertical", width: "100%" }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextareaAutosize
          minRows={15}
          placeholder="Story"
          style={text_area}
          id="outlined-multiline-static"
          data-testid="story"
          value={story}
          onChange={(e) => setStory(e.target.value)}
        />
        <LoadingButton
          sx={{ width: 120 }}
          type="submit"
          disabled={disable}
          loadingIndicator={props.id ? "Updating..." : "Posting..."}
          loading={isPostStoryLoading || isUpdateStoryLoading}
          variant="contained"
          color="primary"
          onClick={props.id ? handleUpdateSubmit : handlePostSubmit}
        >
          {props.id ? "UPDATE" : "POST"}
        </LoadingButton>
        <Button variant="outlined" sx={{ width: 120 }} onClick={props.close}>
          Cancel
        </Button>
      </Box>
    </Box>,
    document.getElementById("portal")!
  );
};
