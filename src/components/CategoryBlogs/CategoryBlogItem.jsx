import { faFileLines, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './style.module.scss'

import facebook from '../../assets/imgs/facebookWhite.png'
import linkedin from '../../assets/imgs/linkedinWhite.png'
import pinterest from '../../assets/imgs/pinterestWhite.png'
import reddit from '../../assets/imgs/redditWhite.png'
import tumblr from '../../assets/imgs/tumblrWhite.png'
import twitter from '../../assets/imgs/twitterWhite.png'
import MetaBar from '../MetaBar'

function CategoryBlogs({ data }) {
   const navigate = useNavigate()
   const [openTooltip, setOpenTooltip] = useState(false)

   const blogItemRef = useRef(null)
   const socialsTooltipRef = useRef(null)

   const handleClickOutside = useCallback(e => {
      if (socialsTooltipRef.current && !socialsTooltipRef.current.contains(e.target)) {
         setOpenTooltip(false)
      }
   }, [])

   return (
      <div key={data.id} className={styles.blogItem} ref={blogItemRef} onClick={handleClickOutside}>
         <div className={styles.thumbnail} onClick={() => navigate(`/blogs/${data.id}`)}>
            <img src={data.image} alt='thumbnail' />

            <div className={styles.overlay}>
               <div className={styles.iconWrap}>
                  <div className={styles.icon}>
                     <FontAwesomeIcon icon={faFileLines} />
                  </div>
               </div>
            </div>
         </div>

         {/* Meta */}
         <MetaBar data={data} metaType='2' />

         <h3 className={styles.title} onClick={() => navigate(`/blogs/${data.id}`)}>
            <span>{data.date}</span>: <span>{data.title}</span>
         </h3>

         <p className={`${styles.paragraph} paragraph`}>{data.desc}</p>

         <div className={styles.buttonWrap}>
            <button
               onClick={e => {
                  e.stopPropagation()
                  setOpenTooltip(!openTooltip)
               }}
            >
               <FontAwesomeIcon icon={faShareAlt} />

               <div
                  className={`${styles.socialsTooltip} ${openTooltip ? styles.open : ''}`}
                  ref={socialsTooltipRef}
               >
                  <div className={styles.socialsWrap}>
                     <a
                        className={styles.social}
                        href='https://www.facebook.com'
                        target='_blank'
                        rel='noreferrer'
                     >
                        <img src={facebook} alt='social' />
                     </a>
                     <a
                        className={styles.social}
                        href='https://twitter.com'
                        target='_blank'
                        rel='noreferrer'
                     >
                        <img src={twitter} alt='social' />
                     </a>
                     <a
                        className={styles.social}
                        href='https://www.pinterest.com'
                        target='_blank'
                        rel='noreferrer'
                     >
                        <img src={pinterest} alt='social' />
                     </a>
                     <a
                        className={styles.social}
                        href='https://www.tumblr.com/'
                        target='_blank'
                        rel='noreferrer'
                     >
                        <img src={tumblr} alt='social' />
                     </a>
                     <a
                        className={styles.social}
                        href='https://www.linkedin.com'
                        target='_blank'
                        rel='noreferrer'
                     >
                        <img src={linkedin} alt='social' />
                     </a>
                     <a
                        className={styles.social}
                        href='https://www.reddit.com/'
                        target='_blank'
                        rel='noreferrer'
                     >
                        <img src={reddit} alt='social' />
                     </a>
                  </div>
               </div>
            </button>

            <button onClick={() => navigate(`/blogs/${data.id}`)}>Read More</button>
         </div>
      </div>
   )
}

export default memo(CategoryBlogs)
