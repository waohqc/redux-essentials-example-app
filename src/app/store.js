import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import postSlice from '../features/postSlice'

export default configureStore({
  reducer: combineReducers({
    posts: postSlice
  }),
})
