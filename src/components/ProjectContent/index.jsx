import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faEarth, faFilm, faUser } from '@fortawesome/free-solid-svg-icons'

function ProjectContent() {
   const title1Ref = useRef(null)
   const detailsRef = useRef(null)
   const title2Ref = useRef(null)
   const infoWrapRef = useRef(null)

   // show on scroll
   const handleScrollAnimation = useCallback(() => {
      const elements = [
         title1Ref.current,
         title2Ref.current,
         ...detailsRef.current.children,
         ...infoWrapRef.current.children,
      ]

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
         // console.log('removed---ProjectContent')
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
      <section className={styles.ProjectContent}>
         <div className={`${styles.container} container`}>
            <div className={styles.content}>
               <h3 className={`${styles.title} h3Title`} ref={title1Ref}>
                  LOREM IPSUM DOLOR SIT AMET CONSECTETUR
               </h3>

               <div className={styles.details} ref={detailsRef}>
                  <p className={`${styles.paragraph} paragraph`}>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore sit amet occaecat.
                  </p>
                  <p className={`${styles.paragraph} paragraph`}>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua.
                  </p>
                  <p className={`${styles.paragraph} paragraph`}>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad
                  </p>

                  <div className={styles.textBoxWrap}>
                     <div className={styles.textBox}>
                        <p>
                           …Lorem Ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                           lorem quis
                        </p>
                        <span>”</span>
                     </div>
                  </div>
                  <p className={`${styles.paragraph} paragraph`} style={{ marginTop: '-1.1rem' }}>
                     dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                     dolorem ipsum quia dolor sit amet, dolor consectetur, adipisci vdolor elit, sed quia
                     non numquam eius modi temporm ipsum quia dolor sit amet, a incidunt ut labore et
                     dolore magnam aliquam quaerat volup dolor ta tem. Lorem ipsum dolor sit amet eius
                     dolore modi tempo
                  </p>

                  <p className={`${styles.paragraph} paragraph`}>
                     dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                     dolorem quia dolor.
                  </p>
                  <p className={`${styles.paragraph} paragraph`}>
                     dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                     dolorem ipsum.
                  </p>
                  <p className={`${styles.paragraph} paragraph`}>
                     voluptatem eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                     dolorem
                  </p>
               </div>
            </div>

            <div className={styles.info}>
               <h5 className={`${styles.title} h5Title`} ref={title2Ref}>
                  PROJECT INFO
               </h5>

               <div className={styles.infoWrap} ref={infoWrapRef}>
                  <div className={styles.infoItem}>
                     <div style={{ background: '#ff387b' }}>
                        <FontAwesomeIcon icon={faUser} />
                     </div>
                     <div>
                        <span>CLIENT</span>
                        <span>Awesome Company LTD</span>
                     </div>
                  </div>
                  <div className={styles.infoItem}>
                     <div style={{ background: '#32c0c2' }}>
                        <FontAwesomeIcon icon={faFilm} />
                     </div>
                     <div>
                        <span>CATEGORY</span>
                        <span>Mobile App Design</span>
                     </div>
                  </div>
                  <div className={styles.infoItem}>
                     <div style={{ background: '#ffd000' }}>
                        <FontAwesomeIcon icon={faCloud} />
                     </div>
                     <div>
                        <span>TAGS</span>
                        <span>WordPress, App, Design</span>
                     </div>
                  </div>
                  <div className={styles.infoItem}>
                     <div style={{ background: '#00aeef' }}>
                        <FontAwesomeIcon icon={faEarth} />
                     </div>
                     <div>
                        <span>PROJECT URL</span>
                        <span>www.codex-themes.com</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default memo(ProjectContent)
