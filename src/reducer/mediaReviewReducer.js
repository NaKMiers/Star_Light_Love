import types from '../constants/types'

const initState = { src: '', type: 'image', unUploaded: false, autoPlayList: [], autoPlay: false }

function mediaReviewReducer(state = initState, action) {
   switch (action.type) {
      case types.REVIEW_MEDIA:
         return {
            ...state,
            src: action.payload.unUploaded ? action.payload.src : action.payload.path,
            type: action.payload.type,
            unUploaded: action.payload.unUploaded || false,
         }

      case types.AUTO_PLAY:
         return { ...state, autoPlay: !state.autoPlay }

      case types.SET_UP_AUTO_PLAY:
         return { ...state, autoPlayList: action.payload }

      case types.CLOSE:
         return initState

      default:
         return state
   }
}

export default mediaReviewReducer
