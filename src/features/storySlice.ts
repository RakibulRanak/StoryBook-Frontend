import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { RejectedActionFromAsyncThunk } from '@reduxjs/toolkit/dist/matchers'
import axios from 'axios'
import { Story, StoryState, StoryId } from '../models/storyModel'

const initialState: StoryState = {
    loading: false,
    storyList: [],
    error: {}
}

export const fetchStories = createAsyncThunk('story/fetchStories', async () => {
    return await axios.get('/api/v1/stories')
        .then(res => {
            return res.data
        })
})

export const fetchStoryById = createAsyncThunk('story/fetchStoryById', async (id: string) => {
    return await axios.get(`/api/product/${id}`).then(res => {
        return res.data
    })
})

// export const postStory = createAsyncThunk('story/postStory', async (data: any, { rejectWithValue }) => {
//     const { form, navigate } = data
//     return await axios.post('/api/product/', form, {
//         headers: {
//             'Content-Type': 'multipart/form-data'
//         }
//     }).then(res => {
//         navigate('/', { replace: true })
//         return res.data
//     }).catch(err => {
//         return rejectWithValue(err.response.data)
//     })
// })

// export const updateStory = createAsyncThunk('story/updateStory', async (data: any, { rejectWithValue }) => {
//     const { navigate, form, id } = data
//     return await axios.put(`/api/product/${id}`, form, {
//         headers: {
//             'Content-Type': 'multipart/form-data'
//         }
//     }).then(res => {
//         navigate('/', { replace: true })
//         return res.data
//     }).catch(err => {
//         return rejectWithValue(err.response.data)
//     })
// })

// export const deleteStory = createAsyncThunk('story/deleteStory', async (id: string) => {
//     return await axios.delete(`/api/product/${id}`).then(res => {
//         return res.data
//     })
// })

const productSlice = createSlice({
    name: 'story',
    initialState,
    reducers: {},
    extraReducers: (builder: any) => {
        builder.addCase(fetchStories.pending, (state: StoryState) => {
            state.loading = true
        })

        builder.addCase(fetchStories.fulfilled, (state: StoryState, action: PayloadAction<Story[]>) => {
            state.loading = false
            state.storyList = action.payload
            state.error = ''
        })

        // builder.addCase(fetchStories.rejected, (state, action) => {
        //     state.loading = false
        //     state.storyList = []
        //     state.error = action.error
        // })

        // builder.addCase(postStory.pending, state => {
        //     state.loading = true
        // })

        // builder.addCase(postStory.fulfilled, (state, action: PayloadAction<Story>) => {
        //     state.loading = false
        //     state.storyList = [...state.storyList, action.payload]
        //     state.error = ''
        // })

        // builder.addCase(postStory.rejected, (state, action) => {
        //     state.loading = false
        //     state.error = action.payload
        // })

        // builder.addCase(updateStory.pending, state => {
        //     state.loading = true
        // })

        // builder.addCase(updateStory.fulfilled, (state, action: PayloadAction<Story>) => {
        //     state.loading = false
        //     const index = state.storyList.findIndex(p => p.id === action.payload.id)
        //     state.storyList[index] = action.payload
        //     state.error = ''
        // })


        // builder.addCase(updateStory.rejected, (state, action) => {
        //     state.loading = false
        //     state.error = action.payload
        // })

        // builder.addCase(deleteStory.pending, state => {
        //     state.loading = true
        // })

        // builder.addCase(deleteStory.fulfilled, (state, action: PayloadAction<StoryId>) => {
        //     state.loading = false
        //     state.storyList = state.storyList.filter(item => item.id != action.payload.id);
        // })

        // builder.addCase(deleteStory.rejected, (state, action) => {
        //     state.loading = false
        //     state.error = action.payload
        // })
    },
})


export default productSlice.reducer
