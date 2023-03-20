import React, {FC} from 'react';
import '../../App.css'

interface Story {
  id : number;
  title : string;
  author : string;
  story : string;
}

export const StoryPreview : FC<Story> = ({title,story,author}) => {
  return (
    <div className = 'App'>
        <h1>{title}</h1>
        {story}
        {author}
    </div>
  );
}
