import axios from 'axios'

const API = axios.create({ baseURL: process.env.REACT_APP_SERVER })

console.log('server: ', process.env.REACT_APP_SERVER)

const mediaApi = {
   getMedia: () => API.get('/medias'),
   uploadMedia: data => API.post('/medias/upload', data),
   editMedia: (id, data) => API.patch(`/medias/edit/${id}`, data),
   deleteMedia: id => API.delete(`/medias/delete/${id}`),
}

export default mediaApi
