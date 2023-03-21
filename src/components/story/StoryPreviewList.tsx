import {FC} from 'react';
import '../../App.css'
import { StoryPreviewItem } from './StoryPreviewItem';

interface Story {
    id : number;
    title : string;
    author : string;
    story : string;
}

interface StoryList {
    storyList : Story[];
}
 
export const StoryPreviewList : FC<StoryList> = ({storyList}) => {
  return (
    <div>
      {storyList.map((story) => (
        <StoryPreviewItem key={story.id} {...story} />
      ))}
    </div>
  );
}
