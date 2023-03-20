import React, {FC} from 'react';
import {useParams} from 'react-router-dom';
import '../App.css'
import storyData from '../storage/stories.json'

interface Story {
  id : number;
  title : string;
  author : string;
  story : string;
}

type StoryId = {
  id : string
}

export const StoryView: FC = () => {
  const { id } = useParams<StoryId>();
  const key: number = Number(id);

  if (!storyData[key]) {
    return (
      <div className='App'>
        <h1>Story not found</h1>
      </div>
    );
  }

  const { story, title, author }: Story = storyData[key];

  return (
    <div className='App'>
      <h1>{title}</h1>
      {story}
      {author}
    </div>
  );
};

