import { faCamera, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import styles from './style.module.scss'

import slide1 from '../../assets/imgs/slide1.jpg'
import slide2 from '../../assets/imgs/slide2.jpg'
import slide3 from '../../assets/imgs/slide3.jpg'
import slide4 from '../../assets/imgs/slide4.jpg'
import { useDispatch } from 'react-redux'
import actions from '../../actions'

const slides = [slide1, slide2, slide3, slide4]
const slideLength = slides.length
const maxSlideIndex = slideLength + 2 - 1

function Slider() {
   const dispatch = useDispatch()

   const [isSliding, setSliding] = useState(false)
   const [slide, setSlide] = useState(1)
   const slideTrackRef = useRef(null)

   useEffect(() => {
      slideTrackRef.current.style.marginLeft = `calc(-100% * ${slide})`
   }, [slide])

   const nextSlide = useCallback(() => {
      if (!isSliding) {
         setSliding(true)

         if (slide === slideLength) {
            setSlide(maxSlideIndex)

            setTimeout(() => {
               slideTrackRef.current.style.transition = 'none'
               setSlide(1)
            }, 510) //slideTrack duration: 0.5s

            setTimeout(() => {
               slideTrackRef.current.style.transition = '0.5s ease-in-out'
            }, 550) //slideTrack duration: 0.5s
         } else {
            setSlide(slide + 1)
         }

         setTimeout(() => {
            setSliding(false)
         }, 550) // slideTrack duration: 0.5s
      }
   }, [isSliding, slide])

   const prevSlide = useCallback(() => {
      if (!isSliding) {
         setSliding(true)

         if (slide === 1) {
            setSlide(0)

            setTimeout(() => {
               slideTrackRef.current.style.transition = 'none'
               setSlide(slideLength)
            }, 510) //slideTrack duration: 0.5s

            setTimeout(() => {
               slideTrackRef.current.style.transition = '0.5s ease-in-out'
            }, 550) //slideTrack duration: 0.5s
         } else {
            setSlide(slide - 1)
         }

         setTimeout(() => {
            setSliding(false)
         }, 550) // slideTrack duration: 0.5s
      }
   }, [isSliding, slide])

   // handle review image in ImageReviewModal
   const handleReviewImage = useCallback(
      (datum, data) => {
         dispatch(actions.reviewMedia(datum))
         dispatch(actions.setUpAutoPlay(data))
      },
      [dispatch]
   )

   // slides autoplay
   useEffect(() => {
      const interval = setInterval(() => {
         nextSlide()
      }, 5000)

      return () => {
         clearInterval(interval)
      }
   }, [nextSlide])

   return (
      <div className={styles.sliderWrap}>
         <div className={styles.slider}>
            <button className={`${styles.slideBtn} ${styles.prevBtn}`} onClick={prevSlide}>
               <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className={`${styles.slideBtn} ${styles.nextBtn}`} onClick={nextSlide}>
               <FontAwesomeIcon icon={faChevronRight} />
            </button>

            <div className={styles.slideTrack} ref={slideTrackRef}>
               <div className={styles.slide} onClick={() => handleReviewImage(slide4, slides)}>
                  <img src={slide4} alt='slide' />

                  <div className={styles.overlay}>
                     <div className={styles.iconWrap}>
                        <div className={styles.icon}>
                           <FontAwesomeIcon icon={faCamera} />
                        </div>
                     </div>
                  </div>
               </div>
               {/*  */}

               {slides.map((slide, index) => (
                  <div
                     key={index}
                     className={styles.slide}
                     onClick={() => handleReviewImage(slide, slides)}
                  >
                     <img src={slide} alt='slide' />

                     <div className={styles.overlay}>
                        <div className={styles.iconWrap}>
                           <div className={styles.icon}>
                              <FontAwesomeIcon icon={faCamera} />
                           </div>
                        </div>
                     </div>
                  </div>
               ))}

               {/*  */}
               <div className={styles.slide} onClick={() => handleReviewImage(slide1, slides)}>
                  <img src={slide1} alt='slide' />

                  <div className={styles.overlay}>
                     <div className={styles.iconWrap}>
                        <div className={styles.icon}>
                           <FontAwesomeIcon icon={faCamera} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default memo(Slider)
