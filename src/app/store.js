import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import postSlice from '../features/posts/postSlice'
import userSlice from '../features/user/userSlice'
export default configureStore({
  reducer: combineReducers({
    posts: postSlice,
    users: userSlice
  }),
})
