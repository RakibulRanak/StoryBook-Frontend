// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { Story, StoryState, BaseStory } from '../models/storyModel'
// import story from '../storage/stories.json'


// const initialState: StoryState = {
//     storyList: story,
//     story: undefined,
// }

// const storySlice = createSlice({
//     name: 'story',
//     initialState,
//     reducers: {
//         fetchStories: (state: StoryState) => {
//             state.storyList = state.storyList.sort((a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime())
//         },
//         fetchStoryById: (state: StoryState, action: PayloadAction<number>) => {
//             const fetchedStory: Story | undefined = state.storyList.find(obj => obj.id === action.payload)
//             state.story = fetchedStory;
//         },
//         postStory: (state: StoryState, action: PayloadAction<BaseStory>) => {
//             const newStory: Story = {
//                 ...action.payload,
//                 author : "rakib",
//                 postedAt: new Date().toLocaleString(),
//                 id: Math.floor(Math.random() * 10001)
//             }
//             state.storyList.push(newStory)
//         },
//         updateStory: (state: StoryState, action: PayloadAction<{ id: number, story: BaseStory }>) => {
//             const index = state.storyList.findIndex((story) => story.id === action.payload.id);
//             state.storyList[index].title = action.payload.story.title;
//             state.storyList[index].story = action.payload.story.story;
//             state.story = state.storyList[index]
//         },
//         deleteStory: (state: StoryState, action: PayloadAction<number>) => {
//             const filteredStories = state.storyList.filter(obj => obj.id !== action.payload)
//             state.storyList = filteredStories;

//         }
//     }
// })

// export const { fetchStories, fetchStoryById, postStory, updateStory, deleteStory } = storySlice.actions;
// export default storySlice.reducer
export {}