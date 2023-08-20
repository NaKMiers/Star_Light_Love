import React, { memo, useCallback, useEffect, useRef } from 'react'
import BlogItem from './BlogItem'
import styles from './style.module.scss'
import { useSelector } from 'react-redux'

function Blogs() {
   const blogs = useSelector(state => state.blogs.posts)
   const containerRef = useRef(null)

   // show on scroll
   const handleScrollAnimation = useCallback(() => {
      const elements = [...containerRef.current.children]

      elements.forEach(e => {
         const top = e.getBoundingClientRect().top
         const bottom = e.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0 && !e.className.includes(styles.appeared)) {
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
         // console.log('removed---Blogs')
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
      <section className={styles.Blogs}>
         <div className={`${styles.container} container`} ref={containerRef}>
            {blogs.map(blog => (
               <BlogItem data={blog} key={blog.id} />
            ))}
         </div>
      </section>
   )
}

export default memo(Blogs)
