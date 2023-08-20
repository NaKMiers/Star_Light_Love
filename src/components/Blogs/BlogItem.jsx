import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment, memo, useCallback, useRef } from 'react'
import styles from './style.module.scss'
import { useNavigate } from 'react-router-dom'

function BlogItem({ data }) {
   const navigate = useNavigate()
   const overlayRef = useRef(null)

   // overlay animation
   const handleMouseOver = useCallback(() => {
      overlayRef.current.style.opacity = 1

      overlayRef.current.classList.remove(styles.close)
      overlayRef.current.classList.add(styles.open)
   }, [])

   // overlay animation
   const handleMouseLeave = useCallback(() => {
      overlayRef.current.style.opacity = 0
      overlayRef.current.classList.remove(styles.open)
      overlayRef.current.classList.add(styles.close)
   }, [])

   return (
      <div
         className={styles.blogItem}
         onMouseOver={handleMouseOver}
         onMouseLeave={handleMouseLeave}
         onClick={() => navigate(`/blogs/${data.id}`)}
      >
         <div className={styles.thumbnail}>
            <img src={data.image} alt='blog' />

            <div className={styles.overlay} ref={overlayRef}>
               <div className={styles.main}>
                  <div className={styles.iconWrap}>
                     <div className={styles.icon}>
                        <FontAwesomeIcon icon={faComment} />
                        <span>0</span>
                     </div>
                     <div className={styles.sep} />
                     <div className={styles.icon}>
                        <FontAwesomeIcon icon={faHeart} />
                        <span>2</span>
                     </div>
                  </div>

                  <p className={styles.paragraph}>
                     Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                     exercitation ullamco laboris nisiut aliquip ex ea commodo.
                  </p>
               </div>
            </div>
         </div>

         <div className={styles.content}>
            <p className={styles.date}>{data.date}</p>

            <p className={styles.title}>{data.title}</p>

            <div className={styles.categories}>
               {data.categories.map((ctg, index) => (
                  <Fragment key={index}>
                     <span
                        onClick={e => {
                           e.stopPropagation()
                           navigate('/categories')
                        }}
                     >
                        {ctg}
                     </span>
                     {index !== data.categories.length - 1 && <div className={styles.sep} />}
                  </Fragment>
               ))}
            </div>
         </div>
      </div>
   )
}

export default memo(BlogItem)
