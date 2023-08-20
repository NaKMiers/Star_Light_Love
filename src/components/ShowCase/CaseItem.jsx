import {
   faEdit,
   faEye,
   faFileLines,
   faSave,
   faShareAlt,
   faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import actions from '../../actions'
import mediaApis from '../../apis'
import facebook from '../../assets/imgs/facebookWhite.png'
import linkedin from '../../assets/imgs/linkedinWhite.png'
import pinterest from '../../assets/imgs/pinterestWhite.png'
import reddit from '../../assets/imgs/redditWhite.png'
import tumblr from '../../assets/imgs/tumblrWhite.png'
import twitter from '../../assets/imgs/twitterWhite.png'
import styles from './style.module.scss'

function CaseItem({ data }) {
   const PUBLIC_FOLDER = process.env.REACT_APP_SERVER
   const dispatch = useDispatch()

   const overlayRef = useRef(null)
   const socialsRef = useRef(null)
   const videoRef = useRef(null)

   const [isShowDesc, setShowDesc] = useState(false)
   const [isEditing, setEditing] = useState(false)
   const [title, setTitle] = useState(data?.title || '')
   const [desc, setDesc] = useState(data?.desc || '')
   const [duration, setDuration] = useState('')

   // show social media share
   const handleShowSocials = useCallback(() => {
      const elements = [...socialsRef.current.children]

      elements.forEach(e => {
         e.classList.remove(styles.hide)
         e.classList.add(styles.show)
      })
   }, [])

   // hide social media share
   const handleHideSocials = useCallback(() => {
      const elements = [...socialsRef.current.children]

      elements.forEach(e => {
         e.classList.add(styles.hide)
         e.classList.remove(styles.show)
      })
   }, [])

   // show overlay on hover
   const handleMouseOver = useCallback(() => {
      overlayRef.current.classList.remove(styles.hide)
      overlayRef.current.classList.add(styles.show)
   }, [])

   // hide overlay on mouse leave
   const handleMouseLeave = useCallback(() => {
      overlayRef.current.classList.remove(styles.show)
      overlayRef.current.classList.add(styles.hide)

      handleHideSocials()
   }, [handleHideSocials])

   // save edit "title and desc"
   const handleSaveEdit = useCallback(async () => {
      console.log('handleSaveEdit')
      if (title !== data.title || desc !== data.desc) {
         try {
            const res = await mediaApis.editMedia(data._id, { title, desc })
            console.log(res.data)
            dispatch(actions.editMediaDirectly(res.data))
            setEditing(false)
         } catch (err) {
            console.log(err)
         }
      } else {
         setEditing(false)
      }
   }, [data, title, desc, dispatch])

   // delete media
   const handleDeleteMedia = useCallback(async () => {
      console.log('handleDeleteMedia')

      try {
         const res = await mediaApis.deleteMedia(data._id)
         console.log('res-delete: ', res.data)
         dispatch(actions.deleteMediaDirectly(res.data._id))
      } catch (err) {
         console.log(err)
      }
   }, [dispatch, data])

   // format duration
   const formatDuration = useCallback(seconds => {
      const minutes = Math.floor(seconds / 60)
      const remainingSeconds = Math.floor(seconds % 60)

      const formattedMinutes = String(minutes).padStart(2, '0')
      const formattedSeconds = String(remainingSeconds).padStart(2, '0')

      return `${formattedMinutes}:${formattedSeconds}`
   }, [])

   useEffect(() => {
      const showDuration = () => {
         const timeout = setTimeout(() => {
            console.log(123123)
            if (videoRef.current.duration) {
               setDuration(formatDuration(videoRef.current.duration))
               clearTimeout(timeout)
            } else {
               showDuration()
            }
         }, 1000)
      }

      if (videoRef.current) {
         showDuration()
      }
   })

   return (
      <div
         className={styles.caseItem}
         onMouseOver={handleMouseOver}
         onMouseLeave={handleMouseLeave}
         // onClick={() => navigate(`/portfolio/${data?._id}`)}
         onClick={() => dispatch(actions.reviewMedia(data))}
      >
         <div className={styles.thumbnail}>
            {data?.type === 'video' ? (
               <video ref={videoRef}>
                  <source src={`${PUBLIC_FOLDER}${data?.path}`} />
               </video>
            ) : (
               <img src={`${PUBLIC_FOLDER}${data?.path}`} alt='thumbnail' />
            )}
         </div>

         <div className={styles.overlay} ref={overlayRef}>
            <div className={styles.iconWrap}>
               <div
                  className={styles.icon}
                  onClick={e => {
                     e.stopPropagation()
                     setShowDesc(!isShowDesc)
                  }}
               >
                  <FontAwesomeIcon icon={faFileLines} />
               </div>

               <div
                  className={styles.icon}
                  onClick={e => {
                     e.stopPropagation()
                     dispatch(actions.reviewMedia(data))
                  }}
               >
                  <FontAwesomeIcon icon={faEye} />
               </div>
               <div
                  className={`${styles.icon} ${isEditing ? styles.editing : ''}`}
                  onClick={e => {
                     e.stopPropagation()
                     !isEditing ? setEditing(true) : handleSaveEdit()
                  }}
               >
                  <FontAwesomeIcon icon={isEditing ? faSave : faEdit} />
               </div>
               <div
                  className={styles.icon}
                  onClick={e => {
                     e.stopPropagation()
                     handleDeleteMedia()
                  }}
               >
                  <FontAwesomeIcon icon={faTrashAlt} />
               </div>
               <div
                  className={styles.icon}
                  onClick={e => {
                     e.stopPropagation()
                     handleShowSocials()
                  }}
               >
                  <FontAwesomeIcon icon={faShareAlt} />
               </div>

               <div className={styles.socials} ref={socialsRef}>
                  <a
                     href='https://www.facebook.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.socialLink}
                     onClick={e => e.stopPropagation()}
                  >
                     <img src={facebook} alt='social' />
                  </a>
                  <a
                     href='https://twitter.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.socialLink}
                     onClick={e => e.stopPropagation()}
                  >
                     <img src={twitter} alt='social' />
                  </a>
                  <a
                     href='https://www.pinterest.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.socialLink}
                     onClick={e => e.stopPropagation()}
                  >
                     <img src={pinterest} alt='social' />
                  </a>
                  <a
                     href='https://www.tumblr.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.socialLink}
                     onClick={e => e.stopPropagation()}
                  >
                     <img src={tumblr} alt='social' />
                  </a>
                  <a
                     href='https://www.linkedin.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.socialLink}
                     onClick={e => e.stopPropagation()}
                  >
                     <img src={linkedin} alt='social' />
                  </a>
                  <a
                     href='https://www.reddit.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.socialLink}
                     onClick={e => e.stopPropagation()}
                  >
                     <img src={reddit} alt='social' />
                  </a>
               </div>
            </div>

            <div
               className={`${styles.title} ${isShowDesc ? styles.hide : ''} ${
                  isEditing ? styles.editing : ''
               } h4Title`}
            >
               <span title={data?.title}>{data?.title}</span>
               <input
                  type='text'
                  className={`${styles.titleInput} h4Title`}
                  placeholder='title...'
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  onClick={e => e.stopPropagation()}
               />
            </div>

            <div
               className={`${styles.descWrap} ${isShowDesc ? styles.show : ''} ${
                  isEditing ? styles.editing : ''
               }`}
            >
               <p>{data?.desc}</p>
               <textarea
                  className={styles.descInput}
                  rows={3}
                  value={desc}
                  onChange={e => setDesc(e.target.value)}
                  onClick={e => e.stopPropagation()}
               />
            </div>
         </div>

         <div className={styles.videoDuration}>
            <span>{duration ? duration : ''}</span>
         </div>
      </div>
   )
}

export default memo(CaseItem)
