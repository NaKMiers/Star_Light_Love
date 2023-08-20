import React, { memo, useEffect } from 'react'
import styles from './style.module.scss'
import PageHeading from '../../components/PageHeading'
import Blogs from '../../components/Blogs'

function BlogsPage() {
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   return (
      <div className={styles.BlogsPage}>
         <PageHeading title='My Blogs' subTitle='Latest news from the blog' />
         <Blogs />
      </div>
   )
}

export default memo(BlogsPage)
