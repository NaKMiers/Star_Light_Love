import React, { memo, useEffect } from 'react'
import styles from './style.module.scss'
import ShowCase from '../../components/ShowCase'

function HomePage() {
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   return (
      <div className={styles.HomePage}>
         <ShowCase />
      </div>
   )
}

export default memo(HomePage)
