import { faCamera, faFileLines, faGlobe, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment, memo, useCallback, useRef } from 'react'
import styles from './styles.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import actions from '../../actions'

function ProjectItem({ data }) {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const iconWrapRef = useRef(null)

   const handleMouseOver = useCallback(() => {
      if (iconWrapRef.current) {
         iconWrapRef.current.classList.remove(styles.hide)
         iconWrapRef.current.classList.add(styles.show)
      }
   }, [])

   const handleMouseLeave = useCallback(() => {
      if (iconWrapRef.current) {
         iconWrapRef.current.classList.remove(styles.show)
         iconWrapRef.current.classList.add(styles.hide)
      }
   }, [])

   return (
      <div
         className={styles.projectItem}
         onMouseOver={handleMouseOver}
         onMouseLeave={handleMouseLeave}
         onClick={() => navigate(`/portfolio/${data.id}`)}
      >
         <div className={styles.thumbnail}>
            <img src={data.source} alt='thumbnail' />

            <div className={styles.overlay}>
               <div className={styles.iconWrap} ref={iconWrapRef}>
                  <div className={styles.icon}>
                     <FontAwesomeIcon icon={faFileLines} />
                  </div>
                  <div
                     className={styles.icon}
                     onClick={e => {
                        e.stopPropagation()
                        dispatch(actions.reviewMedia(data.source))
                     }}
                  >
                     <FontAwesomeIcon icon={faCamera} />
                  </div>
                  <Link to='/portfolio' className={styles.icon} onClick={e => e.stopPropagation()}>
                     <FontAwesomeIcon icon={faGlobe} />
                  </Link>
               </div>
            </div>
         </div>

         <div className={styles.content}>
            <p className={styles.title}>{data.title}</p>

            <div className={styles.captionSep} />

            <p className={styles.desc}>{data.desc}</p>
            <div className={styles.dataAndCtgs}>
               <span>{data.date}</span>
               {data.categories.map((category, index) => (
                  <Fragment key={index}>
                     <span className={styles.category}>{category}</span>
                     {index !== data.categories.length - 1 && <div className={styles.sep} />}
                  </Fragment>
               ))}
            </div>

            <div className={styles.heartIcon}>
               <FontAwesomeIcon icon={faHeart} />
               <span>2</span>
            </div>
         </div>
      </div>
   )
}

export default memo(ProjectItem)
