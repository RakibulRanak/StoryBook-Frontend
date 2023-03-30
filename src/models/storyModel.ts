export interface BaseStory {
    title: string;
    story: string;
}

export interface Story extends BaseStory {
    id: number;
    author: string;
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
