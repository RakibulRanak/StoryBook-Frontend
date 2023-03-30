import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Story, StoryState, BaseStory } from '../models/storyModel'
import story from '../storage/stories.json'

const initialState: StoryState = {
    storyList: story,
    story: undefined,
}

const storySlice = createSlice({
    name: 'story',
    initialState,
    reducers: {
        fetchStories: (state: StoryState) => {
            //state.storyList;
        },
        fetchStoryById: (state: StoryState, action: PayloadAction<number>) => {
            const fetchedStory: Story | undefined = state.storyList.find(obj => obj.id === action.payload)
            state.story = fetchedStory;
        },
        postStory: (state: StoryState, action: PayloadAction<BaseStory>) => {
            const newStory: Story = {
                ...action.payload,
                author: "RA",
                postedAt: "2022-11-30T09:11:29.272Z",
                id: state.storyList.length + 1
            }
            console.log(newStory)
            state.storyList.push(newStory)
        },
        updateStory: (state: StoryState, action: PayloadAction<{ id: number, story: BaseStory }>) => {
            state.storyList[action.payload.id - 1].title = action.payload.story.title;
            state.storyList[action.payload.id - 1].story = action.payload.story.story;
            state.story = state.storyList[action.payload.id - 1]
        },
        deleteStory: (state: StoryState, action: PayloadAction<number>) => {
            const filteredStories = state.storyList.filter(obj => obj.id !== action.payload)
            state.storyList = filteredStories;

        }
    }
})

export const { fetchStories, fetchStoryById, postStory, updateStory, deleteStory } = storySlice.actions;
export default storySlice.reducer
