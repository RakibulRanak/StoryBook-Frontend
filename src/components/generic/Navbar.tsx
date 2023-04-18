import React, { FC } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { RootState } from "../../app/store";
import { removeUser } from "../../features/authSlice";

const LoggedInContent: FC<{ username: string; handleLogout: () => void }> = ({
  username,
  handleLogout,
}) => {
  return (
    <>
      <Typography variant="subtitle1" component="div" sx={{ mr: 2 }}>
        {username}
      </Typography>
      <Button color="inherit" onClick={handleLogout}>
        Logout
      </Button>
    </>
  );
};

const LoggedOutContent: FC<{ handleLogin: () => void }> = ({ handleLogin }) => {
  return (
    <Button onClick={handleLogin} color="inherit">
      Login
    </Button>
  );
};

export const Navbar: FC = () => {
  const navigate = useNavigate();
  const { username, loggedIn } = useAppSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(removeUser());
  };

  const handleLogin = () => {
    navigate("/signin");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            data-testid="storyHub"
            onClick={() => navigate("/")}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            StoryHub
          </Typography>
          {loggedIn ? (
            <LoggedInContent username={username!} handleLogout={handleLogout} />
          ) : (
            <LoggedOutContent handleLogin={handleLogin} />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
