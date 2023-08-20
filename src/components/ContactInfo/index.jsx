import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import location from '../../assets/imgs/location.png'
import phone from '../../assets/imgs/phone.png'
import mail from '../../assets/imgs/mail.png'

function ContactInfo({ info }) {
   const containerRef = useRef(null)
   const nameRef = useRef(null)

   // show on scroll
   const handleScrollAnimation = useCallback(() => {
      const elements = [...containerRef.current.children, nameRef.current]

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
         // console.log('removed---ContactInfo')
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
      <section className={styles.ContactInfo}>
         <h4 className={styles.name} ref={nameRef}>
            {info.name}
         </h4>

         <div className={`${styles.container} container`} ref={containerRef}>
            <div className={styles.contactInfoItem}>
               <div className={styles.icon}>
                  <img src={location} alt='icon' />
               </div>

               <h5 className={`${styles.title} h5Title`}>ADDRESS</h5>

               <p className={`${styles.paragraph} paragraph`}>
                  {info.address.map((in4, index) => (
                     <React.Fragment key={index}>
                        <span>{in4}</span>
                        {index !== info.address.length - 1 && <br />}
                     </React.Fragment>
                  ))}
               </p>
            </div>

            <div className={styles.contactInfoItem}>
               <div className={styles.icon}>
                  <img src={phone} alt='icon' />
               </div>

               <h5 className={`${styles.title} h5Title`}>PHONE</h5>

               <p className={`${styles.paragraph} paragraph`}>
                  {info.phone.map((in4, index) => (
                     <React.Fragment key={index}>
                        <span>{in4}</span>
                        {index !== info.phone.length - 1 && <br />}
                     </React.Fragment>
                  ))}
               </p>
            </div>

            <div className={styles.contactInfoItem}>
               <div className={styles.icon}>
                  <img src={mail} alt='icon' />
               </div>

               <h5 className={`${styles.title} h5Title`}>E-MAIL</h5>

               <p className={`${styles.paragraph} paragraph`}>
                  {info.email.map((in4, index) => (
                     <React.Fragment key={index}>
                        <span>{in4}</span>
                        {index !== info.email.length - 1 && <br />}
                     </React.Fragment>
                  ))}
               </p>
            </div>
         </div>
      </section>
   )
}

export default memo(ContactInfo)
