import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { NotFound } from "./pages/NotFound";
import { StoryView } from "./pages/StoryView";
import { Home } from "./pages/Home";
import { Navbar } from "./components/generic/Navbar";
import { useAppSelector } from "./app/hook";
import { RootState } from "./app/store";

export const App: FC = () => {
  const { loggedIn } = useAppSelector((state: RootState) => state.auth);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/stories/:id" Component={StoryView} />
        <Route
          path="/signup"
          element={!loggedIn ? <SignUp /> : <Navigate to="/" />}
        />
        <Route
          path="/signin"
          element={!loggedIn ? <SignIn /> : <Navigate to="/" />}
        />
        <Route path="/" Component={Home} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </Router>
  );
};
