import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import ProjectItem from './ProjectItem'
import styles from './styles.module.scss'

function Portfolio() {
   const { projects, portfolio } = useSelector(state => state.medias)
   let initialData = projects.filter(project => portfolio.includes(project.id))
   initialData.sort((a, b) => {
      return a.createdAt < b.createdAt ? -1 : a.createdAt > b.createdAt ? 1 : 0
   })
   initialData.reverse()

   const [data, setData] = useState(initialData)

   const [openFilter, setOpenFilter] = useState(false)
   const [filter, setFilter] = useState('All')
   const [sortByName, setSortByName] = useState(false)
   const [sortAsc, setSortAsc] = useState(false)

   const filterWrapRef = useRef(null)
   const projectWrapRef = useRef(null)
   const [projectLength, setProjectLength] = useState(3)
   const interval = useRef(undefined)

   // set the amount of item per row on mount
   const setInitialCaseLength = useCallback(() => {
      const width = window.innerWidth
      if (width > 768) {
         setProjectLength(3)
      } else if (width <= 768 && width > 548) {
         setProjectLength(2)
      } else if (width <= 548) {
         setProjectLength(1)
      }
   }, [])

   // update the amount of item per row on resize
   const handleResize = useCallback(() => {
      const width = window.innerWidth

      if (width > 768 && projectLength !== 3) {
         setProjectLength(3)
      } else if (width <= 768 && width > 548 && projectLength !== 2) {
         setProjectLength(2)
      } else if (width <= 548 && projectLength !== 1) {
         setProjectLength(1)
      }
   }, [projectLength])

   // update the amount of item per row
   useEffect(() => {
      setInitialCaseLength()
      window.addEventListener('resize', handleResize)
      return () => {
         window.removeEventListener('resize', handleResize)
      }
   }, [setInitialCaseLength, handleResize])

   // show on scroll
   const handleScrollAnimation = useCallback(() => {
      // console.log('handleScrollAnimation')
      if (projectWrapRef.current) {
         const elements = [...projectWrapRef.current.children, filterWrapRef.current]
         const result = []

         for (let i = 0; i < elements.length; i += projectLength) {
            const chunk = elements.slice(i, i + projectLength)
            result.push(chunk)
         }

         result.forEach(chunk => {
            let delay = 0.2
            chunk.forEach(e => {
               const top = e.getBoundingClientRect().top
               const bottom = e.getBoundingClientRect().bottom
               e.style.opacity = 0

               if (top < window.innerHeight && bottom > 0 && !e.className.includes(styles.appeared)) {
                  delay += 0.1
                  e.style.transform = `perspective(800px) rotateX(-75deg)`
                  e.style.animation = `flipIn 0.6s ease-in-out ${delay}s forwards`
                  e.classList.add(styles.appeared)
               }
            })
         })

         // remove event listener after all showed
         let countAppeared = 0
         elements.forEach(e => {
            if (e.className.includes(styles.appeared)) {
               countAppeared++
            }
         })
         if (countAppeared === elements.length) {
            // console.log('removed---Portfolio')
            window.removeEventListener('scroll', handleScrollAnimation)
         }
      }
   }, [projectLength])

   useEffect(() => {
      handleScrollAnimation()
      window.addEventListener('scroll', handleScrollAnimation)

      return () => {
         window.removeEventListener('scroll', handleScrollAnimation)
      }
   }, [handleScrollAnimation])

   // clear animation appear
   const handleClearAnimation = useCallback(() => {
      if (projectWrapRef.current) {
         const elements = [...projectWrapRef.current.children]
         elements.forEach(e => {
            e.classList.remove(styles.appeared)
            e.style.animation = 'none'
            e.style.transform = 'none'
            e.opacity = 0
         })
      }
   }, [])

   // handle filter
   const handleFilter = useCallback(
      type => {
         clearInterval(interval.current)
         handleClearAnimation()
         // undefine animation delay
         interval.current = setInterval(() => {
            handleScrollAnimation()
         }, 300)
         switch (type) {
            case 'All':
               setData(initialData)
               setFilter(type)
               break

            default:
               const newData = initialData.filter(project => project.categories.includes(type))
               setData(newData)
               setFilter(type)
         }
      },
      [handleClearAnimation, handleScrollAnimation, initialData]
   )

   // handle sort
   const handleSort = useCallback(
      (type, value) => {
         clearInterval(interval.current)
         handleClearAnimation()
         // undefine animation delay
         interval.current = setInterval(() => {
            handleScrollAnimation()
         }, 300)
         switch (type) {
            case 'sort-by-name':
               setSortByName(value)
               if (value) {
                  let newData = [...data]
                  newData.sort((a, b) => {
                     let titleA = a.title.toLowerCase()
                     let titleB = b.title.toLowerCase()
                     return titleA < titleB ? -1 : titleA > titleB ? 1 : 0
                  })
                  setData(newData)
               } else {
                  let newData = [...data]
                  newData.sort((a, b) => {
                     return a.createdAt < b.createdAt ? -1 : a.createdAt > b.createdAt ? 1 : 0
                  })
                  setData(newData)
               }
               break

            case 'sort-asc':
               setSortAsc(value)
               let newData = [...data]
               newData.reverse()
               setData(newData)
               break

            default:
               break
         }
      },
      [data, handleClearAnimation, handleScrollAnimation]
   )

   return (
      <section className={styles.Portfolio}>
         <div className={`${styles.container} container`}>
            <div className={styles.filterWrap} ref={filterWrapRef}>
               <div className={styles.filterMenuBtn} onClick={() => setOpenFilter(!openFilter)}>
                  <FontAwesomeIcon icon={faEllipsis} />
               </div>
               <ul
                  className={`${styles.filterMenu} ${openFilter ? styles.show : ''}`}
                  onClick={() => setOpenFilter(!openFilter)}
               >
                  <li onClick={() => handleFilter('All')}>All</li>
                  <li onClick={() => handleFilter('Creative Web Project')}>Creative Web Project</li>
                  <li onClick={() => handleFilter('Minimalism')}>Minimalism</li>
                  <li onClick={() => handleFilter('Photography')}>Photography</li>
               </ul>

               <div className={styles.filterLeft}>
                  <button
                     className={filter === 'All' ? styles.active : ''}
                     onClick={() => handleFilter('All')}
                  >
                     all
                  </button>
                  <button
                     className={filter === 'Creative Web Project' ? styles.active : ''}
                     onClick={() => handleFilter('Creative Web Project')}
                  >
                     creative web project
                  </button>
                  <button
                     className={filter === 'Minimalism' ? styles.active : ''}
                     onClick={() => handleFilter('Minimalism')}
                  >
                     minimalism
                  </button>
                  <button
                     className={filter === 'Photography' ? styles.active : ''}
                     onClick={() => handleFilter('Photography')}
                  >
                     photography
                  </button>
               </div>

               <div className={styles.filterRight}>
                  <div className={styles.sort} onClick={() => handleSort('sort-by-name', !sortByName)}>
                     <span>Date</span>

                     <button className={styles.switchBtn}>
                        <div className={sortByName ? styles.active : ''} />
                     </button>

                     <span>Name</span>
                  </div>

                  <div className={styles.separate} />

                  <div
                     className={styles.sort}
                     // onClick={() => setFilters(prev => ({ ...prev, sortByAsc: !prev.sortByAsc }))}
                     // onClick={() => setSortAsc(!sortAsc)}
                     onClick={() => handleSort('sort-asc', !sortAsc)}
                  >
                     <span>Desc</span>

                     <button className={styles.switchBtn}>
                        <div className={sortAsc ? styles.active : ''} />
                     </button>

                     <span>Asc</span>
                  </div>
               </div>
            </div>

            <div className={styles.projectWrap} ref={projectWrapRef}>
               {data.map(project => (
                  <ProjectItem data={project} key={project.id} />
               ))}
            </div>
         </div>
      </section>
   )
}

export default memo(Portfolio)
