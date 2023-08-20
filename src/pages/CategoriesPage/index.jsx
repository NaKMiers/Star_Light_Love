import React, { memo, useEffect } from 'react'
import styles from './style.module.scss'
import PageHeading from '../../components/PageHeading'
import CategoryBlogs from '../../components/CategoryBlogs'

function CategoriesPage() {
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   return (
      <div className={styles.CategoriesPage}>
         <PageHeading title={'Categories'} subTitle='LATEST NEWS FROM THE BLOG' />
         <CategoryBlogs />
      </div>
   )
}

export default memo(CategoriesPage)
