import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
]

const postSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    addForm: (state, action) => {
      state.push(action.payload)
    },
    updateForm: (state, action) => {
      const { id, title, content } = action.payload
      const existPost = state.find((post) => post.id === id)
      if (existPost) {
        existPost.title = title
        existPost.content = content
      }
    },
  },
})

export const { addForm, updateForm } = postSlice.actions

export default postSlice.reducer
