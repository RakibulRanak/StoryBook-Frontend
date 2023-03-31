export interface BaseStory {
    author: string;
    title: string;
    story: string;
}

export interface Story extends BaseStory {
    id: number;
    postedAt: string;
}

export interface StoryList {
    storyList: Story[];
}

export interface StoryState {
    storyList: Story[];
    story: Story | undefined;
}

export type StoryId = {
    id: number
}
