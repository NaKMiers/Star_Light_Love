import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'

function Statictical({ in4s }) {
   const { staticticals } = in4s
   const containerRef = useRef(null)

   // show on scroll
   const handleScrollAnimation = useCallback(() => {
      const elements = [...containerRef.current.children]

      elements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            e.classList.add('appear')
            e.classList.add(styles.appeared)
         }
      })

      const diagramElements = elements.map(e => e.children[0].children[0])
      diagramElements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0 && !e.className.includes(styles.appeared)) {
            e.classList.add(styles.appeared)
            const bar = e.children[0]
            const number = e.children[1]
            const color = bar.getAttribute('data-color')
            let start = 0
            const end = parseInt(bar.getAttribute('data-value'))
            const counter = setInterval(() => {
               if (start === end) {
                  clearInterval(counter)
               }
               const deg = (360 / 100) * start
               bar.style.background = `conic-gradient(${color} 0deg ${deg}deg, transparent ${deg}deg)`
               number.textContent = start
               start += 1
            }, 1000 / end)
         }
      })

      // remove event listener after all showed
      let countAppeared = 0
      elements.forEach(e => {
         if (e.className.includes(styles.appeard)) {
            countAppeared++
         }
      })
      diagramElements.forEach(e => {
         if (e.className.includes(styles.appeard)) {
            countAppeared++
         }
      })
      if (countAppeared === elements.length + diagramElements.length) {
         // console.log('removed---Statictical')
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
      <section className={styles.Statictical}>
         <div className={`${styles.container} container`} ref={containerRef}>
            <div className={styles.staticItem}>
               <div className={styles.staticWrap}>
                  <div className={styles.cirle}>
                     <div
                        className={styles.cirleBar}
                        data-value={staticticals[0].percent}
                        data-color='var(--yellow)'
                     />
                     <span className={styles.text}>{staticticals[0].percent}</span>
                  </div>
               </div>

               <div className={styles.content}>
                  <p>{staticticals[0].label}</p>
                  <p className={`paragraph`}>{staticticals[0].content}</p>
               </div>
            </div>

            <div className={styles.staticItem}>
               <div className={styles.staticWrap}>
                  <div className={styles.cirle}>
                     <div
                        className={styles.cirleBar}
                        data-value={staticticals[1].percent}
                        data-color='var(--primary)'
                     />
                     <span className={styles.text}>{staticticals[1].percent}</span>
                  </div>
               </div>

               <div className={styles.content}>
                  <p>{staticticals[1].label}</p>
                  <p className={`paragraph`}>{staticticals[1].content}</p>
               </div>
            </div>

            <div className={styles.staticItem}>
               <div className={styles.staticWrap}>
                  <div className={styles.cirle}>
                     <div
                        className={styles.cirleBar}
                        data-value={staticticals[2].percent}
                        data-color='#fe6c61'
                     />
                     <span className={styles.text}>{staticticals[2].percent}</span>
                  </div>
               </div>

               <div className={styles.content}>
                  <p>{staticticals[2].label}</p>
                  <p className={`paragraph`}>{staticticals[2].content}</p>
               </div>
            </div>

            <div className={styles.staticItem}>
               <div className={styles.staticWrap}>
                  <div className={styles.cirle}>
                     <div
                        className={styles.cirleBar}
                        data-value={staticticals[3].percent}
                        data-color='#ba7fbc'
                     />
                     <span className={styles.text}>{staticticals[3].percent}</span>
                  </div>
               </div>

               <div className={styles.content}>
                  <p>{staticticals[3].label}</p>
                  <p className={`paragraph`}>{staticticals[3].content}</p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default memo(Statictical)
