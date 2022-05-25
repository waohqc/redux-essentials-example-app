import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit'
import { useId } from 'react'
import { sub } from 'date-fns'

const initialState = [
  {
    id: '1',
    title: 'First Post!',
    content: 'Hello!',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: '2',
    title: 'Second Post',
    content: 'More text',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
]

const postSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    addForm: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      prepare: (title, content, userId) => {
        return {
          payload: {
            id: nanoid(),
            title: title,
            content: content,
            user: userId,
            date: new Date().toISOString(),
          },
        }
      },
    },
    updateForm: (state, action) => {
      const { id, title, content } = action.payload
      const existPost = state.find((post) => post.id === id)
      if (existPost) {
        existPost.title = title
        existPost.content = content
      }
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload
      const existingPost = state.find((post) => post.id === postId)
      if (existingPost) {
        if (!existingPost.reactions) {
          existingPost.reactions = {}
        }
        if (existingPost.reactions[reaction]) {
          existingPost.reactions[reaction]++
        } else {
          existingPost.reactions[reaction] = 0
          existingPost.reactions[reaction]++
        }
      }
    },
  },
})

export const { addForm, updateForm, reactionAdded } = postSlice.actions

export default postSlice.reducer
