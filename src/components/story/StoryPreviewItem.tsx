import React, {FC} from 'react';
import '../../App.css'
import { Story } from '../../models/story';

export const StoryPreviewItem : FC<Story> = ({title,story,author}) => {
  return (
    <div className = 'App'>
        <h1>{title}</h1>
        <h2>{author}</h2>
        {story}
    </div>
  );
}
