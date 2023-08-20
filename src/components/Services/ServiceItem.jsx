import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useEffect, useRef } from 'react'
import SubImageItem from './SubImageItem'
import styles from './style.module.scss'

function Services({ data, reverse }) {
   const contentRef = useRef(null)
   const mainImageRef = useRef(null)
   const subImagesRef = useRef(null)

   // show on scroll
   const handleScrollAnimation = useCallback(() => {
      const elements = [contentRef.current, mainImageRef.current]
      const subImagesElements = [...subImagesRef.current.children]

      elements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0 && !e.className.includes(styles.appeared)) {
            e.style.opacity = 0
            e.classList.add('appear')
            e.classList.add(styles.appeared)
         }
      })

      let delay = 0.2
      subImagesElements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            delay += 0.1
            e.style.animation = `flipIn 0.6s ease-in-out ${delay}s forwards`
            e.classList.add(styles.appeared)
         }
      })

      // remove event listener after all showed
      let countAppeared = 0
      elements.forEach(e => {
         if (e.className.includes(styles.appeard)) {
            countAppeared++
         }
      })

      subImagesElements.forEach(e => {
         if (e.className.includes(styles.appeard)) {
            countAppeared++
         }
      })
      if (countAppeared === elements.length + subImagesElements.length) {
         // console.log('removed---ServiceItem')
         window.removeEventListener('scroll', handleScrollAnimation)
      }
   }, [])

   useEffect(() => {
      handleScrollAnimation()
      window.addEventListener('scroll', handleScrollAnimation)

      return () => {
         window.removeEventListener('scroll', handleScrollAnimation)
      }
   }, [handleScrollAnimation])

   return (
      <div className={`${styles.serviceItem} ${reverse ? styles.reverse : ''}`}>
         <div className={styles.content} ref={contentRef}>
            <div className={styles.icon}>
               <FontAwesomeIcon icon={data.icon} />
            </div>

            <h4 className={`${styles.title} h4Title`}>{data.title}</h4>

            <p className={`${styles.paragraph} paragraph`}>{data.desc}</p>

            <ul className={styles.features}>
               {data.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
               ))}
            </ul>
         </div>

         <div
            className={styles.mainImage}
            ref={mainImageRef}
            style={{ background: `url(${data.mainImage}) no-repeat center center / cover` }}
         />

         <div className={styles.subImages} ref={subImagesRef}>
            {data.subImages.map((image, index) => (
               <SubImageItem data={data.subImages} datum={image} key={index} />
            ))}
         </div>
      </div>
   )
}

export default memo(Services)
