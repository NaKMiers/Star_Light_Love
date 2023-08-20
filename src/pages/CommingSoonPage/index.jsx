import React, { memo, useEffect } from 'react'
import styles from './style.module.scss'
import { Link } from 'react-router-dom'

function CommingSoonPage() {
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   return (
      <div className={styles.CommingSoonPage}>
         <div className={styles.container}>
            <div className={styles.svgWrap}>
               <svg viewBox='0 0 600 170'>
                  <linearGradient id='gr-simple' x1='0' y1='0' x2='100%' y2='100%'>
                     <stop stopColor='#9575cd' offset='0%' />
                     <stop stopColor='#00bcd4' offset='100%' />
                  </linearGradient>

                  <text
                     textAnchor='middle'
                     x='50%'
                     y='50%'
                     dy='.35em'
                     className='text title-h1 light'
                     style={{
                        fill: 'url(#gr-simple)',
                        fontSize: '88px',
                        lineHeight: '1',
                     }}
                  >
                     Comming Soon
                  </text>
               </svg>
            </div>

            <h1 className={`${styles.title} h1Title`}>Unavailable Page!</h1>

            <h4 className={styles.subTitle}>
               This feature is not available currently. It will be developed in the near future. Maybe go
               to our
               <Link className={styles.link} to='/'>
                  home page
               </Link>
               .
            </h4>
         </div>
      </div>
   )
}

export default memo(CommingSoonPage)
