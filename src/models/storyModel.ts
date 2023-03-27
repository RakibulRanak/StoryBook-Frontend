export interface Story {
    id: number;
    title: string;
    author: string;
    story: string;
    postedAt: string;
}

export interface StoryList {
    storyList: Story[];
}

export interface StoryState {
    loading: boolean;
    storyList: Story[];
    story : Story | null;
    error: any;
}

export type StoryId = {
    id: number
}
