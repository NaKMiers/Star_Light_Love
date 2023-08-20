import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useEffect, useRef } from 'react'
import Testimonials from '../Testimonials'
import styles from './style.module.scss'

function MoreInfo() {
   const isCounting = useRef(false)
   const contentRef = useRef(null)
   const featuresRef = useRef(null)

   const title1Ref = useRef(null)
   const title2Ref = useRef(null)
   const diagramWrapRef = useRef(null)
   const formRef = useRef(null)

   // show on scroll
   const handleScrollAnimation = useCallback(() => {
      const elements = [
         ...contentRef.current.children,
         title1Ref.current,
         title2Ref.current,
         diagramWrapRef.current,
         ...formRef.current.children,
      ]

      // 1
      elements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0 && !e.className.includes(styles.appeared)) {
            e.classList.add('appear')
            e.classList.add(styles.appeared)
         }
      })

      // 2
      let delay = 0.2
      const featureElements = [...featuresRef.current.children]
         .map(features => [...features.children])
         .flat()

      featureElements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0) {
            delay += 0.1
            e.style.opacity = 0
            e.style.animation = `flyLeft var(--standard-duration) ease-in ${delay}s forwards`
            e.classList.add(styles.appeared)
         }
      })

      // 3
      const top = diagramWrapRef.current.getBoundingClientRect().top
      const bottom = diagramWrapRef.current.getBoundingClientRect().bottom

      if (top < window.innerHeight && bottom > 0) {
         const diagramElements = [...diagramWrapRef.current.children]
         diagramWrapRef.current.classList.add(styles.appear)

         if (!isCounting.current) {
            isCounting.current = true

            diagramElements.forEach(e => {
               const label = e.children[0].children[1]
               const bar = e.children[1].children[0]
               const dataValue = parseInt(label.getAttribute('data-value'))

               bar.style.width = dataValue + '%'

               let startValue = 0
               let endValue = dataValue
               let interval = setInterval(() => {
                  startValue += 1
                  label.textContent = startValue + '%'
                  if (startValue === endValue) {
                     clearInterval(interval)
                  }
               }, 1000 / dataValue)
            })
         }
      }

      // remove event listener after all showed
      let countAppeared = 0
      elements.forEach(e => {
         if (e.className.includes(styles.appeard)) {
            countAppeared++
         }
      })
      featureElements.forEach(e => {
         if (e.className.includes(styles.appeard)) {
            countAppeared++
         }
      })
      if (diagramWrapRef.current.className.includes(styles.appeared)) {
         countAppeared++
      }
      if (countAppeared === elements.length + featureElements.length + 1) {
         // console.log('removed---MoreInfo')
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
      <section className={styles.MoreInfo}>
         <div className={`${styles.container} container`}>
            {/* content */}
            <div className={styles.content} ref={contentRef}>
               <h3 className={`${styles.title} h3Title`}>LOREM IPSUM DOLOR SIT AMET</h3>

               <p className={`${styles.paragraph} paragraph`}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatdolor sit amet,
                  consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua:
               </p>

               <div className={styles.features} ref={featuresRef}>
                  <ul className={styles.featuresWrap}>
                     <li className={styles.featureItem}>
                        <div className={styles.icon}>
                           <FontAwesomeIcon icon={faSquareCheck} />
                        </div>
                        <p className={`${styles.paragraph} paragraph`}>Lorem ipsum dolor sit amet</p>
                     </li>
                     <li className={styles.featureItem}>
                        <div className={styles.icon}>
                           <FontAwesomeIcon icon={faSquareCheck} />
                        </div>
                        <p className={`${styles.paragraph} paragraph`}>
                           Adipisicing elit, sed do eiusmod
                        </p>
                     </li>
                     <li className={styles.featureItem}>
                        <div className={styles.icon}>
                           <FontAwesomeIcon icon={faSquareCheck} />
                        </div>
                        <p className={`${styles.paragraph} paragraph`}>Incididunt ut labore et dolore</p>
                     </li>
                     <li className={styles.featureItem}>
                        <div className={styles.icon}>
                           <FontAwesomeIcon icon={faSquareCheck} />
                        </div>
                        <p className={`${styles.paragraph} paragraph`}>Incididunt ut labore et dolore</p>
                     </li>
                  </ul>

                  <ul className={styles.featuresWrap}>
                     <li className={styles.featureItem}>
                        <div className={styles.icon}>
                           <FontAwesomeIcon icon={faSquareCheck} />
                        </div>
                        <p className={`${styles.paragraph} paragraph`}>Lorem ipsum dolor sit amet</p>
                     </li>
                     <li className={styles.featureItem}>
                        <div className={styles.icon}>
                           <FontAwesomeIcon icon={faSquareCheck} />
                        </div>
                        <p className={`${styles.paragraph} paragraph`}>
                           Adipisicing elit, sed do eiusmod
                        </p>
                     </li>
                     <li className={styles.featureItem}>
                        <div className={styles.icon}>
                           <FontAwesomeIcon icon={faSquareCheck} />
                        </div>
                        <p className={`${styles.paragraph} paragraph`}>Incididunt ut labore et dolore</p>
                     </li>
                     <li className={styles.featureItem}>
                        <div className={styles.icon}>
                           <FontAwesomeIcon icon={faSquareCheck} />
                        </div>
                        <p className={`${styles.paragraph} paragraph`}>Incididunt ut labore et dolore</p>
                     </li>
                  </ul>

                  <ul className={styles.featuresWrap}>
                     <li className={styles.featureItem}>
                        <div className={styles.icon}>
                           <FontAwesomeIcon icon={faSquareCheck} />
                        </div>
                        <p className={`${styles.paragraph} paragraph`}>Lorem ipsum dolor sit amet</p>
                     </li>
                     <li className={styles.featureItem}>
                        <div className={styles.icon}>
                           <FontAwesomeIcon icon={faSquareCheck} />
                        </div>
                        <p className={`${styles.paragraph} paragraph`}>
                           Adipisicing elit, sed do eiusmod
                        </p>
                     </li>
                     <li className={styles.featureItem}>
                        <div className={styles.icon}>
                           <FontAwesomeIcon icon={faSquareCheck} />
                        </div>
                        <p className={`${styles.paragraph} paragraph`}>Incididunt ut labore et dolore</p>
                     </li>
                     <li className={styles.featureItem}>
                        <div className={styles.icon}>
                           <FontAwesomeIcon icon={faSquareCheck} />
                        </div>
                        <p className={`${styles.paragraph} paragraph`}>Incididunt ut labore et dolore</p>
                     </li>
                  </ul>
               </div>

               <Testimonials />
            </div>

            {/* skills */}
            <div className={styles.skills}>
               <h5 className={`${styles.title} h5Title`} style={{ marginBottom: 8 }} ref={title1Ref}>
                  SKILLS USED
               </h5>

               <div className={styles.diagramWrap} ref={diagramWrapRef}>
                  <div className={styles.diagram}>
                     <div className={styles.diagramLabel}>
                        <span>Databases</span>
                        <span data-value='43' style={{ color: '#ff387b' }}>
                           0%
                        </span>
                     </div>
                     <div className={styles.diagramBar}>
                        <div style={{ background: '#ff387b' }} />
                     </div>
                  </div>
                  <div className={styles.diagram}>
                     <div className={styles.diagramLabel}>
                        <span>Programming</span>
                        <span data-value='73' style={{ color: '#32c0c2' }}>
                           0%
                        </span>
                     </div>
                     <div className={styles.diagramBar}>
                        <div style={{ background: '#32c0c2' }} />
                     </div>
                  </div>
                  <div className={styles.diagram}>
                     <div className={styles.diagramLabel}>
                        <span>Marketing</span>
                        <span data-value='48' style={{ color: '#ffd000' }}>
                           0%
                        </span>
                     </div>
                     <div className={styles.diagramBar}>
                        <div style={{ background: '#ffd000' }} />
                     </div>
                  </div>
                  <div className={styles.diagram}>
                     <div className={styles.diagramLabel}>
                        <span>Design</span>
                        <span data-value='65' style={{ color: '#00aeef' }}>
                           0%
                        </span>
                     </div>
                     <div className={styles.diagramBar}>
                        <div style={{ background: '#00aeef' }} />
                     </div>
                  </div>
               </div>

               <h5
                  className={`${styles.title} h5Title`}
                  style={{ marginBottom: '1.1rem' }}
                  ref={title2Ref}
               >
                  CONTACT US
               </h5>

               <form className={styles.contactForm} ref={formRef}>
                  <div className={styles.inputWrap}>
                     <input type='text' name='name' placeholder='Name*' required />
                  </div>
                  <div className={styles.inputWrap}>
                     <input type='email' name='email' placeholder='Email*' required />
                  </div>

                  <div className={styles.textareaWrap}>
                     <textarea name='message' cols='30' rows='5' placeholder='Message' required />
                  </div>

                  <button className={styles.submitBtn}>Submit message</button>
               </form>
            </div>
         </div>
      </section>
   )
}

export default memo(MoreInfo)
