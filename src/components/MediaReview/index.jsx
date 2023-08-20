import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import styles from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faArrowLeft,
   faArrowRight,
   faPause,
   faPlay,
   faSearch,
   faX,
} from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import actions from '../../actions'

function MediaReview() {
   const {
      src: media,
      type,
      unUploaded,
      autoPlayList,
      autoPlay,
   } = useSelector(state => state.mediaReview)
   const dispatch = useDispatch()
   const PUBLIC_FOLDER = process.env.REACT_APP_SERVER

   console.log('media: ', media)

   const [isZoom, setZoom] = useState(false)
   const [isChanging, setChanging] = useState(false)
   const [curNumber, setCurNumber] = useState(NaN)
   const mediaReviewRef = useRef(null)
   const mediaRef = useRef(null)
   const videoRef = useRef(null)
   const playBarRef = useRef(null)

   // open media review
   const handleOpenMediaReview = useCallback(() => {
      mediaReviewRef.current.style.display = 'flex'
      setTimeout(() => {
         mediaReviewRef.current.style.opacity = 1
      }, 0)

      setTimeout(() => {
         mediaRef.current.style.opacity = 1
         if (videoRef.current) {
            videoRef.current.play()
         }
      }, 300) // mediaReviewRef transition 0.5s - mediaRef transition - 0.2s = 0.3s
   }, [])

   // close media review
   const handleCloseMediaReview = useCallback(() => {
      mediaReviewRef.current.style.opacity = 0
      setTimeout(() => {
         mediaReviewRef.current.style.display = 'none'
         dispatch(actions.close())
      }, 510) // mediaReview duration 0.5s

      setTimeout(() => {
         mediaRef.current.style.opacity = 0
      }, 300) // mediaReviewRef transition 0.5s - mediaRef transition - 0.2s = 0.3s
   }, [dispatch])

   // close when click out side
   const handleClickOutSide = useCallback(
      e => {
         if (mediaRef.current && !mediaRef.current.contains(e.target)) {
            handleCloseMediaReview()
         }
      },
      [handleCloseMediaReview]
   )

   // open media review
   useEffect(() => {
      if (media) {
         if (autoPlayList.length > 0) {
            const index = autoPlayList.findIndex(item => item === media)
            setCurNumber(index + 1)
         }
         handleOpenMediaReview()
      }
   }, [media, autoPlayList, handleOpenMediaReview])

   // next media review
   const handleNextImage = useCallback(() => {
      if (!isChanging) {
         setChanging(true)
         const index = autoPlayList.findIndex(item => item === media)
         setCurNumber(index + 1)
         mediaRef.current.style.opacity = 0

         setTimeout(() => {
            index === autoPlayList.length - 1
               ? dispatch(actions.reviewMedia(autoPlayList[0]))
               : dispatch(actions.reviewMedia(autoPlayList[index + 1]))

            mediaRef.current.style.opacity = 1
            setChanging(false)
         }, 210) // mediaRef transition: 0.2s
      }
   }, [autoPlayList, media, isChanging, dispatch])

   // prev media review
   const handlePrevImage = useCallback(() => {
      if (!isChanging) {
         setChanging(true)
         const index = autoPlayList.findIndex(item => item === media)
         mediaRef.current.style.opacity = 0

         setTimeout(() => {
            index === 0
               ? dispatch(actions.reviewMedia(autoPlayList[autoPlayList.length - 1]))
               : dispatch(actions.reviewMedia(autoPlayList[index - 1]))

            mediaRef.current.style.opacity = 1
            setChanging(false)
         }, 200)
      }
   }, [autoPlayList, media, isChanging, dispatch])

   // auto play
   useEffect(() => {
      let interval
      let timeout

      if (autoPlayList.length > 0) {
         if (autoPlay) {
            playBarRef.current.classList.add(styles.replay)

            timeout = setTimeout(() => {
               handleNextImage()
            }, 3290) // autoPlay: 3.5s - mediaRef transition 0.2s = 3.3s
         } else {
            playBarRef.current.classList.remove(styles.replay)
         }
      }

      return () => {
         clearInterval(interval)
         clearInterval(timeout)
      }
   }, [autoPlay, autoPlayList, media, dispatch, handleNextImage])

   return (
      <div className={styles.mediaReview} ref={mediaReviewRef} onClick={handleClickOutSide}>
         {autoPlayList.length > 0 && (
            <>
               <div className={styles.playBar} ref={playBarRef}>
                  <div />
               </div>
               <div className={styles.number}>
                  {curNumber}/{autoPlayList?.length}
               </div>
            </>
         )}

         <div className={styles.buttonWrap}>
            <button
               onClick={e => {
                  e.stopPropagation()
                  setZoom(!isZoom)
               }}
            >
               <FontAwesomeIcon icon={faSearch} />
            </button>

            {autoPlayList.length > 0 && (
               <button
                  onClick={e => {
                     e.stopPropagation()
                     dispatch(actions.autoPlay())
                  }}
               >
                  <FontAwesomeIcon icon={autoPlay ? faPause : faPlay} />
               </button>
            )}

            <button>
               <FontAwesomeIcon icon={faX} />
            </button>
         </div>

         {autoPlayList.length > 0 && (
            <>
               <button
                  className={`${styles.modalBtn} ${styles.nextBtn}`}
                  onClick={e => {
                     e.stopPropagation()
                     handlePrevImage()
                  }}
               >
                  <FontAwesomeIcon icon={faArrowLeft} />
               </button>
               <button
                  className={`${styles.modalBtn} ${styles.prevBtn}`}
                  onClick={e => {
                     e.stopPropagation()
                     handleNextImage()
                  }}
               >
                  <FontAwesomeIcon icon={faArrowRight} />
               </button>
            </>
         )}

         <div className={`${styles.media} ${isZoom ? styles.zoom : ''}`} ref={mediaRef}>
            {type === 'image' ? (
               <img
                  src={unUploaded ? media : `${PUBLIC_FOLDER}${media}`}
                  alt='thumbnail'
                  onClick={() => setZoom(!isZoom)}
               />
            ) : (
               <video src={unUploaded ? media : `${PUBLIC_FOLDER}${media}`} controls ref={videoRef} />
            )}
         </div>
      </div>
   )
}

export default memo(MediaReview)
