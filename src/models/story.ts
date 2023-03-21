export interface Story {
    id : number;
    title : string;
    author : string;
    story : string;
    postedAt : string;
}

export interface StoryList{
    storyList : Story[];
}

export type StoryId = {
    id : number
}
  