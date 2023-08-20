import React, { memo, useCallback, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import styles from './style.module.scss'

import CategoryBlogItem from './CategoryBlogItem'

function CategoryBlogs() {
   const { posts, categoryPosts } = useSelector(state => state.blogs)
   let data = posts.filter(post => categoryPosts.includes(post.id))
   data.sort((a, b) => {
      return a.createdAt < b.createdAt ? -1 : a.createdAt > b.createdAt ? 1 : 0
   })

   const containerRef = useRef(null)

   // show on scroll
   const handleScrollAnimation = useCallback(() => {
      const elements = [...containerRef.current.children]

      elements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0 && !e.className.includes(styles.appeared)) {
            e.style.opacity = 0
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
         // console.log('removed---CategoryBlogs')
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
      <section className={styles.CategoryBlogs}>
         <div className={`${styles.container} container`} ref={containerRef}>
            {data.map(post => (
               <CategoryBlogItem data={post} key={post.id} />
            ))}
         </div>
      </section>
   )
}

export default memo(CategoryBlogs)
