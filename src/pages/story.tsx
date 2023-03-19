import React, {FC} from 'react';
import '../App.css'

interface StoryProps {
  story: {
    id : number;
    title : string;
    author : string;
    story : string;
  }
};

export const Story : FC<StoryProps> = ({story}) => {
  return (
    <div className = 'App'>
        <h1>{story.title}</h1>
        {story.story}
        {story.author}
    </div>
  );
}
