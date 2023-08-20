import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'

function ContactForm() {
   const containerRef = useRef(null)
   const formRef = useRef(null)

   // show on scroll
   const handleScrollAnimation = useCallback(() => {
      let elements = [...containerRef.current.children]
      elements = [...elements.slice(0, elements.length - 1), ...formRef.current.children]

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
         // console.log('removed---ContactForm')
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
      <section className={styles.ContactForm}>
         <div className={`${styles.container} container`} ref={containerRef}>
            <h1 className={`${styles.title} h1Title`}>
               Have an interesting
               <br />
               love story?
            </h1>

            <h4 className={`${styles.subTitle} h4Title`}>Please tell us</h4>

            <form className={styles.form} ref={formRef}>
               <div className={styles.inputWrap}>
                  <input type='text' name='name' placeholder='Name*' required />
               </div>
               <div className={styles.inputWrap}>
                  <input type='email' name='email' placeholder='Email*' required />
               </div>
               <div className={styles.inputWrap}>
                  <input type='url' name='website' placeholder='Website*' required />
               </div>

               <div className={styles.textareaWrap}>
                  <textarea name='message' cols='30' rows='10' placeholder='Message' required></textarea>
               </div>

               <button className={styles.submitBtn}>Submit message</button>
            </form>
         </div>
      </section>
   )
}

export default memo(ContactForm)
