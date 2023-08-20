import { faEye, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { format } from 'date-fns'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../actions'
import loading from '../../assets/imgs/loading.gif'
import styles from './style.module.scss'
import mediaApi from '../../apis'

function AddMediaModal({ reRender }) {
   const dispatch = useDispatch()
   const { files } = useSelector(state => state.files)

   const inputFileRef = useRef(null)
   const [fileReviews, setFileReviews] = useState([])
   const [curMedia, setCurMedia] = useState(null)
   const [title, setTitle] = useState('')
   const [desc, setDesc] = useState('')
   const [isLoading, setLoading] = useState(false)
   const [indexEditing, setIndexEditing] = useState(-1)
   const [isEditing, setEditing] = useState(false)

   const modalRef = useRef(null)

   // open modal
   const handleOpenAddMediaModal = useCallback(() => {
      modalRef.current.style.display = 'block'
      setTimeout(() => {
         modalRef.current.style.top = 0
         modalRef.current.style.opacity = 1
      }, 100)
   }, [])

   // close modal
   const handleCloseAddMediaModal = useCallback(() => {
      modalRef.current.style.top = '100%'
      modalRef.current.style.opacity = 0
      setTimeout(() => {
         modalRef.current.style.display = 'none'
         dispatch(actions.clearMedia())
      }, 310)
   }, [dispatch])

   // open add media modal
   useEffect(() => {
      if (files) {
         handleOpenAddMediaModal()

         const mediaReviews = files.map(file => {
            return {
               title: '',
               desc: '',
               name: file.name,
               size: file.size,
               createdAt: file.lastModified,
               type: file.type.startsWith('image') ? 'image' : 'video',
               src: URL.createObjectURL(file),
            }
         })

         setFileReviews(mediaReviews)
      }
   }, [files, handleOpenAddMediaModal])

   // upload more file
   const handleUploadMoreFile = useCallback(
      e => {
         dispatch(actions.uploadMoreMedia(e.target.files))
      },
      [dispatch]
   )

   // set edit current media
   const handleSetCurMedia = useCallback(
      index => {
         console.log(index)
         const media = fileReviews[index]

         setIndexEditing(index)
         setCurMedia(media)
         setTitle(media.title)
         setDesc(media.desc)
         // setSavedChange(false)
      },
      [fileReviews]
   )

   console.log(fileReviews)

   // save edit
   const handleSaveChange = useCallback(() => {
      fileReviews[indexEditing] = {
         ...fileReviews[indexEditing],
         title,
         desc,
      }
      setEditing(false)
      setCurMedia(null)
      setIndexEditing(-1)
      setTitle('')
      setDesc('')

      console.log(fileReviews)
   }, [indexEditing, title, desc, fileReviews])

   // check changing title and desc
   useEffect(() => {
      setEditing(indexEditing !== -1 && (title !== curMedia?.title || desc !== curMedia?.desc))
   }, [title, desc, curMedia, indexEditing])

   // SUBMIT
   const handleSubmit = useCallback(
      async e => {
         e.preventDefault()
         setLoading(true)

         const formData = new FormData()

         // apppend each file to formData
         for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i])
            formData.append('title', fileReviews[i].title)
            formData.append('desc', fileReviews[i].desc)
         }

         try {
            const res = await mediaApi.uploadMedia(formData)
            dispatch(actions.uploadMediaSuccess(res.data.files))
            handleCloseAddMediaModal()
            setLoading(false)

            setTimeout(() => {
               reRender()
            }, 0)
         } catch (err) {
            console.log(err)
         }
      },
      [files, fileReviews, dispatch, handleCloseAddMediaModal, reRender]
   )

   return (
      <div className={styles.AddMediaModal} ref={modalRef}>
         <div className={styles.container}>
            <div className={styles.mediaPart}>
               <div className={styles.mediaContainer}>
                  <div
                     className={styles.addMediaBtn}
                     onClick={() => !isLoading && inputFileRef.current.click()}
                  >
                     <div className={`${styles.buttonWrap}  ${isLoading ? styles.disable : ''}`}>
                        <button className={styles.addIcon}>
                           <FontAwesomeIcon icon={faPlus} />
                        </button>
                     </div>
                     <input
                        type='file'
                        multiple
                        ref={inputFileRef}
                        style={{ display: 'none' }}
                        onChange={handleUploadMoreFile}
                     />
                  </div>

                  {fileReviews?.map((file, index) => (
                     <div
                        className={`${styles.mediaBox} ${isLoading ? styles.disable : ''}`}
                        key={index}
                        onClick={() => !isLoading && handleSetCurMedia(index)}
                     >
                        <div className={styles.media}>
                           {file.type === 'image' ? (
                              <img src={file.src} alt='memory' />
                           ) : (
                              <video src={file.src} />
                           )}
                        </div>
                        <div className={styles.overlay}>
                           <div className={styles.fileInfo}>
                              <span title='name: 2123219832.jpg'>name: {file.name}</span>
                              <span title='size: 2.2mb'>size: {file.size}</span>
                              <span title='date: 19/04/2004'>
                                 date: {format(file.createdAt, 'dd/MM/yy HH:mm')}
                              </span>
                           </div>
                        </div>
                        <div className={styles.functionButtons}>
                           <button
                              className={`${styles.btn} ${styles.reviewBtn}`}
                              onClick={e => {
                                 e.stopPropagation()
                                 dispatch(actions.reviewMedia({ ...file, unUploaded: true }))
                              }}
                           >
                              <FontAwesomeIcon icon={faEye} />
                           </button>

                           <button
                              className={`${styles.btn} ${styles.removeBtn}`}
                              onClick={e => {
                                 e.stopPropagation()
                                 dispatch(actions.removeMedia(index))
                              }}
                           >
                              <FontAwesomeIcon icon={faTrash} />
                           </button>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            <div className={styles.detailPart}>
               <h4 className={`${styles.title} h4Title`}>
                  {curMedia ? `Edit: ${curMedia.name}` : 'Add Image'}
               </h4>

               <form className={styles.form} onSubmit={e => e.preventDefault()}>
                  <input
                     className={styles.titleInput}
                     type='text'
                     placeholder='Title...'
                     value={title}
                     onChange={e => setTitle(e.target.value)}
                  />
                  <textarea
                     className={styles.descInput}
                     name='desc'
                     placeholder='Description...'
                     cols='30'
                     rows='10'
                     value={desc}
                     onChange={e => setDesc(e.target.value)}
                  />

                  <div className={styles.buttonWrap}>
                     <button className={styles.submitBtn} onClick={handleSubmit}>
                        {isLoading ? <img src={loading} alt='loading' /> : 'Add'}
                     </button>

                     <button
                        className={`${styles.saveBtn} ${isLoading ? styles.disable : ''} ${
                           isEditing ? styles.isEditing : ''
                        }`}
                        onClick={handleSaveChange}
                        disabled={isLoading}
                     >
                        Save
                     </button>

                     <button
                        className={`${styles.cancelBtn} ${isLoading ? styles.disable : ''}`}
                        onClick={handleCloseAddMediaModal}
                        disabled={isLoading}
                     >
                        Cancel
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default memo(AddMediaModal)
