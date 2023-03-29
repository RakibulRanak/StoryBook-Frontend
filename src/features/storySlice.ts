import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Story, StoryState, StoryId, BaseStory } from '../models/storyModel'
import story from '../storage/stories.json'

const initialState: StoryState = {
    storyList: story,
    story : null,
}

const storySlice = createSlice({
    name: 'story',
    initialState,
    reducers: {
        fetchStories: (state: StoryState)=>{
            state.storyList = state.storyList;
        },
        fetchStoryById : (state: StoryState, action: PayloadAction<number>) => {
            state.story = state.storyList[action.payload-1]
        },
        postStory: (state: StoryState, action: PayloadAction<BaseStory>)=>{
            const newStory: Story = {
                ...action.payload,
                author : "RA",
                postedAt : "2021-11-30T09:11:29.272Z",
                id : state.storyList.length+1
            }
            console.log(newStory)
            state.storyList.push(newStory)
        },
        updateStory: (state: StoryState, action: PayloadAction<Story>)=>{
            state.storyList[action.payload.id - 1] = action.payload;
        },
    }
})

export const { fetchStories, fetchStoryById,postStory, updateStory } = storySlice.actions;
export default storySlice.reducer
