import React, { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { NotFound } from "./pages/NotFound";
import { StoryView } from "./pages/StoryView";
import { Home } from "./pages/Home";
import { Navbar } from "./components/generic/Navbar";

export const App: FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/stories/:id" Component={StoryView} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/signin" Component={SignIn} />
        <Route path="/" Component={Home} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </Router>
  );
};
