import React, { Fragment, memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faBars,
   faCalendarAlt,
   faChevronLeft,
   faChevronRight,
   faComment,
   faHeart,
} from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

function MetaBar({ data, metaType = '1' }) {
   const navigate = useNavigate()
   const posts = useSelector(state => state.blogs.posts)
   const projects = useSelector(state => state.medias.medias)

   let link = ''
   let state = []

   switch (metaType) {
      case '1':
      case '2':
         link = '/blogs/'
         state = posts
         break
      case '3':
         link = '/portfolio/'
         state = projects
         break
      default:
         break
   }

   const curIndex = state.findIndex(state => state.id === data.id)
   const nextLink = link + state[curIndex === state.length - 1 ? 0 : curIndex + 1].id
   const prevLink = link + state[curIndex === 0 ? state.length - 1 : curIndex - 1].id

   const metaBarRef = useRef(null)

   // show on scroll
   const handleScrollAnimation = useCallback(() => {
      const top = metaBarRef.current.getBoundingClientRect().top
      const bottom = metaBarRef.current.getBoundingClientRect().bottom

      if (
         top < window.innerHeight &&
         bottom > 0 &&
         !metaBarRef.current.className.includes(styles.appeared)
      ) {
         metaBarRef.current.style.opacity = 0
         metaBarRef.current.style.transform = `perspective(800px) rotateX(-75deg)`
         metaBarRef.current.style.animation = `flipIn 0.6s ease-in-out 0.2s forwards`
         metaBarRef.current.classList.add(styles.appeared)
         // console.log('removed---MetaBar')
         window.removeEventListener('scroll', handleScrollAnimation)
      }
   }, [])

   useEffect(() => {
      if (metaType === '1') {
         handleScrollAnimation()
         window.addEventListener('scroll', handleScrollAnimation)
      }

      return () => {
         if (metaType === '1') {
            window.removeEventListener('scroll', handleScrollAnimation)
         }
      }
   }, [metaType, handleScrollAnimation])

   return (
      <div
         className={`${styles.MetaBar} ${
            metaType === '2' ? styles.type2 : metaType === '3' ? styles.type3 : ''
         }`}
         ref={metaBarRef}
      >
         <div className={styles.right}>
            {metaType !== '3' && (
               <>
                  <div className={styles.icon}>
                     <FontAwesomeIcon icon={faComment} />
                     <span>{data.comments}</span>
                  </div>
                  <div className={styles.sep} />
                  <div className={styles.icon}>
                     <FontAwesomeIcon icon={faHeart} />
                     <span>{data.likes}</span>
                  </div>
               </>
            )}

            {(metaType === '1' || metaType === '3') && (
               <Link to={prevLink} className={`${styles.metaBtn} ${styles.prev}`}>
                  <FontAwesomeIcon icon={faChevronLeft} />
               </Link>
            )}
            {metaType === '1' && (
               <Link to='/blogs' className={`${styles.metaBtn} ${styles.bars}`}>
                  <FontAwesomeIcon icon={faBars} />
               </Link>
            )}
            {(metaType === '1' || metaType === '3') && (
               <Link to={nextLink} className={`${styles.metaBtn} ${styles.next}`}>
                  <FontAwesomeIcon icon={faChevronRight} />
               </Link>
            )}
         </div>

         <div className={styles.left}>
            {metaType === '3' ? (
               <>
                  <div className={`${styles.icon} ${styles.icon1}`}>
                     <FontAwesomeIcon icon={faCalendarAlt} />
                  </div>
                  <span>November 3, 2020</span>
               </>
            ) : (
               <span>By {data.author}</span>
            )}
            <div className={styles.sep} />

            {data.categories.map((category, index) => (
               <Fragment key={index}>
                  <span className={styles.category} onClick={() => navigate('/categories')}>
                     {category}
                  </span>
                  {index !== data.categories.length - 1 && <div className={styles.sep} />}
               </Fragment>
            ))}

            {metaType === '1' && (
               <>
                  <div className={styles.sep} />
                  <span>{data.date}</span>
               </>
            )}

            {metaType === '3' && (
               <>
                  <div className={styles.sep} />
                  <div className={`${styles.icon} ${styles.heartIcon}`}>
                     <FontAwesomeIcon icon={faHeart} />
                     <span>9</span>
                  </div>
               </>
            )}
         </div>
      </div>
   )
}

export default memo(MetaBar)
