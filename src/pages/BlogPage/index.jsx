import React, { memo, useEffect } from 'react'
import styles from './style.module.scss'
import PageHeading from '../../components/PageHeading'
import Blog from '../../components/Blog'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function BlogPage() {
   const { id } = useParams()
   const data = useSelector(state => state.blogs.posts.find(post => post.id === +id))

   useEffect(() => {
      window.scrollTo(0, 0)
   }, [id])

   return (
      <div className={styles.BlogPage}>
         <PageHeading title={data.title} subTitle={data.subTitle} />
         <Blog data={data} />
      </div>
   )
}

export default memo(BlogPage)
