import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'

function PageHeading({ title, subTitle }) {
   const containerRef = useRef(null)

   // show on scroll
   const handleScrollAnimation = useCallback(() => {
      const elements = [...containerRef.current.children]

      elements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0 && !e.className.includes(styles.appeared)) {
            e.classList.add('appear')
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

      if (countAppeared === elements.length) {
         // console.log('removed---PageHeading')
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
      <section className={styles.PageHeading}>
         <div className={`${styles.container} container`} ref={containerRef}>
            <h1 className={`${styles.title} h1Title`}>{title}</h1>
            <h4 className={`${styles.subTitle} h4Title`}>{subTitle}</h4>
         </div>
      </section>
   )
}

export default memo(PageHeading)
