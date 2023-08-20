import types from '../constants/types'

const initState = {
   files: null,
}

function fileReducer(state = initState, action) {
   let index = action.index

   switch (action.type) {
      case types.UPLOAD_MEDIA:
         return { ...state, files: Array.from(action.payload) }

      case types.UPLOAD_MORE_MEDIA:
         const additionalFiles = Array.from(action.payload)
         return { ...state, files: [...additionalFiles, ...state.files] }

      case types.CLEAR_MEDIA:
         return { ...state, files: null }

      case types.REMOVE_MEDIA:
         return { ...state, files: state.files.filter((_, i) => i !== index) }

      case types.EDIT_MEDIA:
         // state.files[index] = action.payload
         // console.log(state.files[index])
         return { ...state }

      default:
         return state
   }
}

export default fileReducer
