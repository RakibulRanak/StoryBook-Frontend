import React, {FC} from 'react';
import '../../App.css'
import storyData from '../../storage/stories.json'

interface Story {
  id : number;
  title : string;
  author : string;
  story : string;
}

type StoryId = {
  id : number
}

export const StoryViewItem: FC<StoryId> = ({id}) => {
  if (!storyData[id]) {
    return (
      <div className='App'>
        <h1>Story not found</h1>
      </div>
    );
  }

  const { story, title, author }: Story = storyData[id];

  return (
    <div className='App'>
      <h1>{title}</h1>
      <h2>{author}</h2>
      {story}
    </div>
  );
};

