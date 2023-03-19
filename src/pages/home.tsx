import React, {FC} from 'react';
import '../App.css'
import { Story } from './story';
import { storyData } from '../storage';

type StoryList = {
    id : number;
    title : string;
    author : string;
    story : string;
}[]

const storyList: StoryList = storyData; 

export const Home : FC = () => {
  return (
    <div className = 'App'>
      {storyList.map((story) => (
        <Story key={story.id} {...story} />
      ))}
    </div>
  );
}
