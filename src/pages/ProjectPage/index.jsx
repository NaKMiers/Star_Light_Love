import React, { memo, useEffect } from 'react'
import styles from './style.module.scss'
import PageHeading from '../../components/PageHeading'
import Project from '../../components/Project'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ProjectPage() {
   const { id } = useParams()
   const projects = useSelector(state => state.medias.projects)
   const data = projects.find(project => project.id === +id)

   useEffect(() => {
      window.scrollTo(0, 0)
   }, [id])

   return (
      <div className={styles.ProjectPage}>
         <PageHeading title={data.title} subTitle={data.subTitle} />
         <Project data={data} />
      </div>
   )
}

export default memo(ProjectPage)
