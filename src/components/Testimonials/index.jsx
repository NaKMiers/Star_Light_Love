import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import styles from './style.module.scss'

import { testimonials } from '../../data'

function Testimonials() {
   const [sliding, setSliding] = useState(false)
   const [slide, setSlide] = useState(1)
   const sliderRef = useRef(null)
   const slideTrackRef = useRef(null)

   useEffect(() => {
      slideTrackRef.current.style.marginLeft = `calc(-100% * ${slide})`
   }, [slide])

   const nextSlide = useCallback(() => {
      const slideLength = slideTrackRef.current.children.length - 2
      const maxSlideIndex = slideLength + 2 - 1
      const slides = [...slideTrackRef.current.children]

      if (!sliding) {
         setSliding(true)
         if (slide === slideLength) {
            setSlide(maxSlideIndex)
            slides[slide].style.opacity = 0

            setTimeout(() => {
               slideTrackRef.current.style.transition = 'none'
               slides[slide].style.opacity = 1
               setSlide(1)
            }, 1010) // slideTrack duration: 1s

            setTimeout(() => {
               slideTrackRef.current.style.transition = 'all 1s ease-in-out'
            }, 1050) // slideTrack duration: 1s
         } else {
            setSlide(slide + 1)
            slides[slide].style.opacity = 0

            setTimeout(() => {
               slides[slide].style.opacity = 1
            }, 990)
         }
         setTimeout(() => {
            setSliding(false)
         }, 1050) // slideTrack duration: 1s
      }
   }, [slide, sliding])

   const prevSlide = useCallback(() => {
      const slideLength = slideTrackRef.current.children.length - 2
      const slides = [...slideTrackRef.current.children]

      if (!sliding) {
         setSliding(true)
         if (slide === 1) {
            setSlide(0)
            slides[slide].style.opacity = 0

            setTimeout(() => {
               slideTrackRef.current.style.transition = 'none'
               slides[slide].style.opacity = 1
               setSlide(slideLength)
            }, 1010) // slideTrack duration: 1s

            setTimeout(() => {
               slideTrackRef.current.style.transition = 'all 1s ease-in-out'
            }, 1050) // slideTrack duration: 1s
         } else {
            setSlide(slide - 1)
            slides[slide].style.opacity = 0

            setTimeout(() => {
               slides[slide].style.opacity = 1
            }, 990)
         }
         setTimeout(() => {
            setSliding(false)
         }, 1050) // slideTrack duration: 1s
      }
   }, [slide, sliding])

   useEffect(() => {
      const interval = setInterval(() => {
         nextSlide()
      }, 10000)

      return () => {
         clearInterval(interval)
      }
   }, [nextSlide])

   return (
      <div className={styles.Testimonials}>
         <div className={`${styles.container} container`}>
            <div className={styles.slider} ref={sliderRef}>
               <button className={`${styles.slideBtn} ${styles.nextBtn}`} onClick={nextSlide}>
                  <FontAwesomeIcon icon={faAngleRight} />
               </button>
               <button className={`${styles.slideBtn} ${styles.prevBtn}`} onClick={prevSlide}>
                  <FontAwesomeIcon icon={faAngleLeft} />
               </button>

               <div className={styles.slideTrack} ref={slideTrackRef}>
                  {testimonials.map((testimonial, index) => (
                     <div key={index} className={styles.slide}>
                        <div className={styles.slideBody}>
                           <div className={styles.avatar}>
                              <img src={testimonial.avatar} alt='avatar' />
                           </div>
                           <div className={styles.content}>
                              <p>{testimonial.name}</p>
                              <p>{testimonial.company}</p>
                              <p>
                                 {testimonial.text}
                                 <span>
                                    <span>”</span>
                                 </span>
                              </p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            <div className={styles.sliderSvg}>
               <svg style={{ fill: 'var(--secondary)' }} width='100' height='50'>
                  <path d='M 0,-1 Q 45,5 50,50 Q 55,5 100,-1'></path>
               </svg>
            </div>
         </div>
      </div>
   )
}

export default memo(Testimonials)
