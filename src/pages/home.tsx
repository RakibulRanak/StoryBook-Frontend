import React, {FC} from 'react';
import '../App.css'
import { Story } from './story';

interface StoryListProps {
  storyList : {
    id : number;
    title : string;
    author : string;
    story : string;
  }[]
}

export const Home : FC<StoryListProps> = ({storyList}) => {
  return (
    <div className = 'App'>
      {storyList.map((story) => (
        <Story key={story.id} story = {story} />
      ))}
    </div>
  );
}
