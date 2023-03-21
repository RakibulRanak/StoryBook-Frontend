import {FC} from 'react';
import '../../App.css'
import { StoryPreview } from './StoryPreview';

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
        <StoryPreview key={story.id} {...story} />
      ))}
    </div>
  );
}
