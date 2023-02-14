import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../features/posts/postSlices'

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
})
