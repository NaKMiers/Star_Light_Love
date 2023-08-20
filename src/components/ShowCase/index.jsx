import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../actions'
import AddMediaModal from '../AddMediaModal'
import CaseItem from './CaseItem'
import styles from './style.module.scss'

function ShowCase() {
   const dispatch = useDispatch()
   const showcase = useSelector(state => state.medias.medias)

   const containerRef = useRef(null)
   const fileRef = useRef(null)
   const [caseLength, setCaseLength] = useState(4)

   // set caseLength on mount
   const setInitialCaseLength = useCallback(() => {
      const width = window.innerWidth
      if (width > 1200) {
         setCaseLength(4)
      } else if (width <= 1200 && width > 768) {
         setCaseLength(3)
      } else if (width <= 768 && width > 548) {
         setCaseLength(2)
      } else if (width <= 548) {
         setCaseLength(1)
      }
   }, [])

   // update caseLength on resize
   const handleResize = useCallback(() => {
      const width = window.innerWidth

      if (width > 1200 && caseLength !== 4) {
         setCaseLength(4)
      } else if (width <= 1200 && width > 768 && caseLength !== 3) {
         setCaseLength(3)
      } else if (width <= 768 && width > 548 && caseLength !== 2) {
         setCaseLength(2)
      } else if (width <= 548 && caseLength !== 1) {
         setCaseLength(1)
      }
   }, [caseLength])

   // update amount of case per row
   useEffect(() => {
      setInitialCaseLength()
      window.addEventListener('resize', handleResize)
      return () => {
         window.removeEventListener('resize', handleResize)
      }
   }, [setInitialCaseLength, handleResize])

   // const convertHeicToJpeg = useCallback(async file => {
   //    const heifModule = await heif()
   //    const heifImage = await heifModule.read(file)

   //    const jpegImage = await heifModule.convert(heifImage, 'jpeg')
   //    const jpegData = jpegImage.data

   //    return new File([jpegData], file.name.replace('.heic', '.jpg'), { type: 'image/jpeg' })
   // }, [])

   // upload files
   const handleUploadFiles = useCallback(
      async e => {
         const heic = e.target.files
         console.log(heic)

         dispatch(actions.uploadMedia(e.target.files))
      },
      [dispatch]
   )

   // show on scroll
   const handleScrollAnimation = useCallback(() => {
      console.log('handleScrollAnimation')
      const elements = [...containerRef.current.children]
      const result = []

      for (let i = 0; i < elements.length; i += caseLength) {
         const chunk = elements.slice(i, i + caseLength)
         result.push(chunk)
      }

      result.forEach(chunk => {
         let delay = 0.2
         chunk.forEach(e => {
            const top = e.getBoundingClientRect().top
            const bottom = e.getBoundingClientRect().bottom

            if (top < window.innerHeight && bottom > 0) {
               delay += 0.15
               e.style.animation = `zoomOut 0.6s ease-in-out ${delay}s forwards`
               e.classList.add(styles.appeard)
            }
         })
      })

      // remove event listener after all showed
      let countAppeared = 0
      elements.forEach(e => {
         if (e.className.includes(styles.appeard)) {
            countAppeared++
         }
      })

      if (countAppeared === elements.length) {
         // console.log('removed---ShowCase')
         window.removeEventListener('scroll', handleScrollAnimation)
      }
   }, [caseLength])

   useEffect(() => {
      handleScrollAnimation()
      window.addEventListener('scroll', handleScrollAnimation)

      return () => {
         window.removeEventListener('scroll', handleScrollAnimation)
      }
   }, [handleScrollAnimation])

   // // get data
   // useEffect(() => {
   //    const getData = async () => {
   //       try {
   //          const res = await mediaApi.getMedia()
   //          console.log('res-get: ', res.data)
   //          dispatch(actions.getMedia(res.data))
   //          handleScrollAnimation()
   //       } catch (err) {
   //          console.log(err)
   //       }
   //    }

   //    getData()
   // }, [dispatch, handleScrollAnimation])

   return (
      <section className={styles.ShowCase}>
         <div className={styles.container} ref={containerRef}>
            {/* <div
               className={styles.addMediaBtn}
               onClick={() => {
                  // setOpenModal(true)
                  fileRef.current.click()
               }}
            >
               <button className={styles.addIcon}>
                  <FontAwesomeIcon icon={faPlus} />
               </button>
            </div> */}

            {showcase.map((media, index) => (
               <CaseItem data={media} key={index} />
            ))}

            <AddMediaModal reRender={handleScrollAnimation} />
            <input
               type='file'
               multiple
               ref={fileRef}
               style={{ display: 'none' }}
               onChange={handleUploadFiles}
            />
         </div>
      </section>
   )
}

export default memo(ShowCase)
