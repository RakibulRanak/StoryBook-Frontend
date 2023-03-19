
import React, {FC} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { storyList } from './storage';
import { SignIn } from './pages/signIn';
import { SignUp } from './pages/signUp';
import { NotFound } from './pages/notFound';
import { Story } from './pages/story';
import { Home } from './pages/home';

export const App : FC = () => {
  return (
    <Router>
      <Routes>
          {/* <Route path="/stories/:id" Component={Story} /> */}
          <Route path="/signup" Component={SignUp} />
          <Route path="/signin" Component={SignIn} />
          <Route path="/" Component = { () => <Home storyList = {storyList}/>}/>
          <Route path="*" Component={NotFound} />
      </Routes>
    </Router>
  );
}
