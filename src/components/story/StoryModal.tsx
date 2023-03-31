import {
  Box,
  TextareaAutosize,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { fetchStories, postStory, updateStory } from "../../features/storySlice";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { RootState } from "../../app/store";


const my_modal = {
  position: "fixed",
  top: "50%",
  left: "50%",
  width: "50vw",
  minWidth: "300px",
  transform: "translate(-50%, -50%)",
  padding: "12px",
  paddingBottom: "8px",
  zIndex: 1000,
  align: "center",
  backdropFilter: "blur(3px)",
  background: "gray.500",
};

export const StoryModal = (props: any) => {
  const [title, setTitle] = useState(props.title);
  const [story, setStory] = useState(props.story);
  const [disable, setDisable] = useState(true);
  const { username } = useAppSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useAppDispatch();

  document.getElementById("root")!.style.filter = "blur(3px)";

  useEffect(() => {
    if (story && story.trim() && title && title.trim()) setDisable(false);
    else setDisable(true);
  }, [story, title]);

  const handlePostSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.close();
    setTitle("");
    setStory("");
    dispatch(postStory({ title, story, author: username! }));
    dispatch(fetchStories())
    setDisable(true);
  };
  const handleUpdateSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.close();
    dispatch(updateStory({ story: { title, story, author: username! }, id: props.id }));
    setDisable(true);
  };

  return ReactDom.createPortal(
    <Box sx={my_modal}>
      <Box pt={5}>
        <TextareaAutosize
          minRows={2}
          placeholder="Title"
          id="outlined-multiline-static"
          style={{ resize: "vertical", width: "100%" }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextareaAutosize
          minRows={15}
          placeholder="Story"
          style={{
            resize: "vertical",
            width: "100%",
            maxHeight: "50vh",
            minHeight: "20vh",
          }}
          id="outlined-multiline-static"
          value={story}
          onChange={(e) => setStory(e.target.value)}
        />
        <Button
          type="submit"
          disabled={disable}
          variant="contained"
          color="primary"
          onClick={props.id ? handleUpdateSubmit : handlePostSubmit}
        >
          {props.id ? "UPDATE" : "POST"}
        </Button>
        <Button variant="outlined" onClick={props.close}>
          Cancel
        </Button>
      </Box>
    </Box>,
    document.getElementById("portal")!
  );
};

export default StoryModal;
