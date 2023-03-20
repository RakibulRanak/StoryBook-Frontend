
import React, {FC} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignIn } from './pages/signIn';
import { SignUp } from './pages/signUp';
import { NotFound } from './pages/notFound';
import { StoryView } from './pages/storyView';

import { Home } from './pages/home';

export const App : FC = () => {
  return (
    <Router>
      <Routes>
          {/* <Route path="/stories/:id" Component={StoryView} /> */}
          <Route path="/signup" Component={SignUp} />
          <Route path="/signin" Component={SignIn} />
          <Route path="/" Component = {Home}/>
          <Route path="*" Component={NotFound} />
      </Routes>
    </Router>
  );
}
