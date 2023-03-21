import React, {FC} from 'react';
import '../App.css'
import storyData from '../storage/stories.json'
import { StoryPreviewList } from '../components/story/StoryPreviewList';

 
export const Home : FC = () => {
  return (
    <div> 
      <StoryPreviewList storyList= {storyData}/>
    </div>
  );
}
