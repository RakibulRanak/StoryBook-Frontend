import React, { FC } from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { RootState } from "../../app/store";
import { removeUser } from "../../features/authSlice";
import { useSignOutMutation } from "../../services/authApi";

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
  const [signOut] = useSignOutMutation();
  const navigate = useNavigate();
  const { username, loggedIn } = useAppSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    signOut({
      refresh_token: localStorage.getItem("refresh_token") || "false_token",
    });
    dispatch(removeUser());
  };

  const handleLogin = () => {
    navigate("/signin");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
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
