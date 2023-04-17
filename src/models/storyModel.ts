export interface AddStory {
    title: string;
    story: string;
}
export interface UpdateStory extends AddStory {
    id: number;
}
export interface Story extends UpdateStory {
    author : string;
    postedAt : string;
}

export interface Response {
    message : string;
}
export interface StoryResponse extends Response {
    data: Story;
}

export interface StoriesResponse extends Response {
    data : Story[] 
}
