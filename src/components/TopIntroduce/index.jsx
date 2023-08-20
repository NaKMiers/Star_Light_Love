import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import introduceImg1 from '../../assets/imgs/introduceImg1.jpg'

function TopIntroduce({ in4s, reverse }) {
   const part1Ref = useRef(null)
   const part2Ref = useRef(null)

   // show on scroll
   const handleScrollAnimation = useCallback(() => {
      const elements = [...part1Ref.current.children, ...part2Ref.current.children]

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
         // console.log('removed---TopIntroduce')
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
      <section className={styles.TopIntroduce}>
         <div className={`${styles.container} ${reverse ? styles.reverse : ''} container`}>
            <div className={styles.part} ref={part1Ref}>
               <h1 className={`${styles.title} h1Title`}>
                  MY NAME IS
                  <br />
                  {in4s.name}
               </h1>

               <p className={`${styles.subTitle} h4Title`}>{in4s.title}</p>

               <div className={styles.details}>
                  <p>...{in4s.introduce}</p>
                  <span>”</span>
               </div>
            </div>

            <div className={styles.part} ref={part2Ref}>
               <div className={styles.image}>
                  <img src={introduceImg1} alt='introduce' />
               </div>
            </div>
         </div>
      </section>
   )
}

export default memo(TopIntroduce)
