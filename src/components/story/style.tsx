import { styled } from '@mui/material/styles';
import { Box, Typography } from "@mui/material";

export const ParentStoryBox = styled(Box)({
    position: "relative",
    marginLeft: "20vw",
    marginRight: "20vw",
    marginBottom: "3vh",
});
export const StoryPreviewTypography = styled(Typography)({
    display: "-webkit-box",
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    maxWidth: "100%",
    textOverflow: "ellipsis",
});

export const my_modal = {
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

export const text_area: React.CSSProperties = {
    margin: "auto",
    width: "100%",
    textAlign: "center",

}