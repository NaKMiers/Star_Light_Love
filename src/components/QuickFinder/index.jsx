import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import quickFinder1 from '../../assets/imgs/quickFinder1.png'
import quickFinder2 from '../../assets/imgs/quickFinder2.png'
import quickFinder3 from '../../assets/imgs/quickFinder3.png'
import quickFinder4 from '../../assets/imgs/quickFinder4.png'
import quickFinder5 from '../../assets/imgs/quickFinder5.png'
import quickFinder6 from '../../assets/imgs/quickFinder6.png'
import quickFinder7 from '../../assets/imgs/quickFinder7.png'
import quickFinder8 from '../../assets/imgs/quickFinder8.png'

function QuickFinder() {
   const containerRef = useRef(null)

   // show on scroll
   const handleScrollAnimation = useCallback(() => {
      const elements = [...containerRef.current.children]

      let delay = 0.2
      elements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            delay += 0.1
            e.style.opacity = 0
            e.style.animation = `zoomOut 0.6s ease-in-out ${delay}s forwards`
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
         // console.log('removed---QuickFinder')
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
      <section className={styles.QuickFinder}>
         <div className={`${styles.container} container`} ref={containerRef}>
            <div className={styles.quickFinderItem}>
               <div className={styles.detail}>
                  <h5 className={`${styles.title} h5Title`}>Flexible</h5>

                  <p className={`${styles.paragraph} paragraph`}>
                     Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                  </p>
               </div>

               <div className={styles.icon}>
                  <img src={quickFinder1} alt='quick-finder' />
               </div>
            </div>

            <div className={styles.quickFinderItem}>
               <div className={styles.detail}>
                  <h5 className={`${styles.title} h5Title`}>Powerful</h5>

                  <p className={`${styles.paragraph} paragraph`}>
                     Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                  </p>
               </div>

               <div className={styles.icon}>
                  <img src={quickFinder2} alt='quick-finder' />
               </div>
            </div>

            <div className={styles.quickFinderItem}>
               <div className={styles.detail}>
                  <h5 className={`${styles.title} h5Title`}>Hi-tech</h5>

                  <p className={`${styles.paragraph} paragraph`}>
                     Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                  </p>
               </div>

               <div className={styles.icon}>
                  <img src={quickFinder3} alt='quick-finder' />
               </div>
            </div>

            <div className={styles.quickFinderItem}>
               <div className={styles.detail}>
                  <h5 className={`${styles.title} h5Title`}>Fast loading</h5>

                  <p className={`${styles.paragraph} paragraph`}>
                     Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                  </p>
               </div>

               <div className={styles.icon}>
                  <img src={quickFinder4} alt='quick-finder' />
               </div>
            </div>

            <div className={styles.quickFinderItem}>
               <div className={styles.detail}>
                  <h5 className={`${styles.title} h5Title`}>Pixel perfect</h5>

                  <p className={`${styles.paragraph} paragraph`}>
                     Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                  </p>
               </div>

               <div className={styles.icon}>
                  <img src={quickFinder5} alt='quick-finder' />
               </div>
            </div>

            <div className={styles.quickFinderItem}>
               <div className={styles.detail}>
                  <h5 className={`${styles.title} h5Title`}>Mighty admin</h5>

                  <p className={`${styles.paragraph} paragraph`}>
                     Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                  </p>
               </div>

               <div className={styles.icon}>
                  <img src={quickFinder6} alt='quick-finder' />
               </div>
            </div>

            <div className={styles.quickFinderItem}>
               <div className={styles.detail}>
                  <h5 className={`${styles.title} h5Title`}>Develop time</h5>

                  <p className={`${styles.paragraph} paragraph`}>
                     Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                  </p>
               </div>

               <div className={styles.icon}>
                  <img src={quickFinder7} alt='quick-finder' />
               </div>
            </div>

            <div className={styles.quickFinderItem}>
               <div className={styles.detail}>
                  <h5 className={`${styles.title} h5Title`}>Selling</h5>

                  <p className={`${styles.paragraph} paragraph`}>
                     Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor
                  </p>
               </div>

               <div className={styles.icon}>
                  <img src={quickFinder8} alt='quick-finder' />
               </div>
            </div>
         </div>
      </section>
   )
}

export default memo(QuickFinder)
