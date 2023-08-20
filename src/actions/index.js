import types from '../constants/types'

const actions = {
   reviewMedia: image => ({ type: types.REVIEW_MEDIA, payload: image }),
   autoPlay: () => ({ type: types.AUTO_PLAY }),
   setUpAutoPlay: data => ({ type: types.SET_UP_AUTO_PLAY, payload: data }),
   close: () => ({ type: types.CLOSE }),

   getMedia: data => ({ type: types.GET_MEDIA, payload: data }),
   uploadMedia: data => ({ type: types.UPLOAD_MEDIA, payload: data }),
   uploadMoreMedia: data => ({ type: types.UPLOAD_MORE_MEDIA, payload: data }),
   clearMedia: () => ({ type: types.CLEAR_MEDIA }),
   removeMedia: index => ({ type: types.REMOVE_MEDIA, index }),
   editMedia: (index, payload) => ({ type: types.EDIT_MEDIA, index, payload }),
   uploadMediaSuccess: data => ({ type: types.UPLOAD_MEDIA_SUCCESS, payload: data }),

   editMediaDirectly: data => ({ type: types.EDIT_MEDIA_DIRECTLY, payload: data }),
   deleteMediaDirectly: id => ({ type: types.DELETE_MEDIA_DIRECTLY, id }),
}

export default actions
