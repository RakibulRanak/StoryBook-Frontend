import React, {FC} from 'react';
import '../App.css'

interface StoryProps {
    id : number;
    title : string;
    author : string;
    story : string;
};

export const Story : FC<StoryProps> = ({story,title,author}) => {
  return (
    <div className = 'App'>
        <h1>{title}</h1>
        {story}
        {author}
    </div>
  );
}
