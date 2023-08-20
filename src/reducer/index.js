import { combineReducers } from 'redux'
import mediaReviewReducer from './mediaReviewReducer'
import blogReducer from './blogReducer'
import serviceReducer from './serviceReducer'
import mediaReducer from './mediaReducer'
import fileReducer from './fileReducer'

const reducers = combineReducers({
   mediaReview: mediaReviewReducer,
   blogs: blogReducer,
   services: serviceReducer,
   medias: mediaReducer,
   files: fileReducer,
})

export default reducers
