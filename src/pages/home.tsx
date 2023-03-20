import React, {FC, useEffect, useState} from 'react';
import '../App.css'
import storyData from '../storage/stories.json'
import { StoryPreviewList } from '../components/story/storyPreviewList';

 
export const Home : FC = () => {
  return (
    <div> 
      <StoryPreviewList storyList= {storyData}/>
    </div>
  );
}
