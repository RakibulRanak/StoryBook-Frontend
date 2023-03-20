import React, {FC} from 'react';
import '../App.css'
import storyData from '../storage/stories.json'

interface Story {
  id : number;
  title : string;
  author : string;
  story : string;
}

interface Prop {
  id : number
}

export const StoryView : FC<Prop> = ({id}) => {
  return (
    <div className = 'App'>
        <h1>{storyData[id].title}</h1>
        {storyData[id].story}
        {storyData[id].author}
    </div>
  );
}
