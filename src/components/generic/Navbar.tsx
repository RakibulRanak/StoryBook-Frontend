import React, { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export const Navbar: FC = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [username, setUsername] = React.useState("RakibulRanak");
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here
    setIsLoggedIn(false);
    setUsername("");
  };

  const handleLogin = () => {
    // Perform logout logic here
    navigate('/signin')
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
          <Typography data-testid="storyHub" onClick={() => navigate('/')} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            StoryHub
          </Typography>
          {isLoggedIn ? (
            <>
              <Typography variant="subtitle1" component="div" sx={{ mr: 2 }}>
                {username}
              </Typography>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <Button onClick={handleLogin} color="inherit">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
