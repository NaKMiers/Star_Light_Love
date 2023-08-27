import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import location from '../../assets/imgs/location.png'
import phone from '../../assets/imgs/phone.png'
import mail from '../../assets/imgs/mail.png'
import facebook from '../../assets/imgs/facebookWhite.png'
import twitter from '../../assets/imgs/twitterWhite.png'
import instagram from '../../assets/imgs/instagramWhite.png'
import pinterest from '../../assets/imgs/pinterestWhite.png'
import zalo from '../../assets/imgs/zaloWhite.png'
import tiktok from '../../assets/imgs/tiktokWhite.png'

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
            <div className={`${styles.contactInfoItem} ${styles.address}`}>
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

            <div className={`${styles.contactInfoItem} ${styles.phone}`}>
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

            <div className={`${styles.contactInfoItem} ${styles.mail}`}>
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

            <div className={`${styles.contactInfoItem} ${styles.facebook} ${styles.white}`}>
               <div className={styles.icon}>
                  <img src={facebook} alt='icon' />
               </div>

               <h5 className={`${styles.title} h5Title`}>Facebook</h5>

               <p className={`${styles.paragraph} paragraph`}>
                  {info.facebook.map((in4, index) => (
                     <React.Fragment key={index}>
                        <span>{in4}</span>
                        {index !== info.facebook.length - 1 && <br />}
                     </React.Fragment>
                  ))}
               </p>
            </div>

            <div className={`${styles.contactInfoItem} ${styles.instagram} ${styles.white}`}>
               <div className={styles.icon}>
                  <img src={instagram} alt='icon' />
               </div>

               <h5 className={`${styles.title} h5Title`}>Instagram</h5>

               <p className={`${styles.paragraph} paragraph`}>
                  {info.instagram.map((in4, index) => (
                     <React.Fragment key={index}>
                        <span>{in4}</span>
                        {index !== info.instagram.length - 1 && <br />}
                     </React.Fragment>
                  ))}
               </p>
            </div>

            <div className={`${styles.contactInfoItem} ${styles.twitter} ${styles.white}`}>
               <div className={styles.icon}>
                  <img src={twitter} alt='icon' />
               </div>

               <h5 className={`${styles.title} h5Title`}>Twitter</h5>

               <p className={`${styles.paragraph} paragraph`}>
                  {info.twitter.map((in4, index) => (
                     <React.Fragment key={index}>
                        <span>{in4}</span>
                        {index !== info.twitter.length - 1 && <br />}
                     </React.Fragment>
                  ))}
               </p>
            </div>

            <div className={`${styles.contactInfoItem} ${styles.pinterest} ${styles.white}`}>
               <div className={styles.icon}>
                  <img src={pinterest} alt='icon' />
               </div>

               <h5 className={`${styles.title} h5Title`}>Pinterest</h5>

               <p className={`${styles.paragraph} paragraph`}>
                  {info.pinterest.map((in4, index) => (
                     <React.Fragment key={index}>
                        <span>{in4}</span>
                        {index !== info.pinterest.length - 1 && <br />}
                     </React.Fragment>
                  ))}
               </p>
            </div>

            <div className={`${styles.contactInfoItem} ${styles.tiktok} ${styles.white}`}>
               <div className={styles.icon}>
                  <img src={tiktok} alt='icon' />
               </div>

               <h5 className={`${styles.title} h5Title`}>Tiktok</h5>

               <p className={`${styles.paragraph} paragraph`}>
                  {info.tiktok.map((in4, index) => (
                     <React.Fragment key={index}>
                        <span>{in4}</span>
                        {index !== info.tiktok.length - 1 && <br />}
                     </React.Fragment>
                  ))}
               </p>
            </div>

            <div className={`${styles.contactInfoItem} ${styles.zalo} ${styles.white}`}>
               <div className={styles.icon}>
                  <img src={zalo} alt='icon' />
               </div>

               <h5 className={`${styles.title} h5Title`}>Zalo</h5>

               <p className={`${styles.paragraph} paragraph`}>
                  {info.zalo.map((in4, index) => (
                     <React.Fragment key={index}>
                        <span>{in4}</span>
                        {index !== info.zalo.length - 1 && <br />}
                     </React.Fragment>
                  ))}
               </p>
            </div>
         </div>
      </section>
   )
}

export default memo(ContactInfo)
