import React, { memo } from 'react'
import styles from './style.module.scss'
import ServiceItem from './ServiceItem'
import { useSelector } from 'react-redux'

function Services() {
   const services = useSelector(state => state.services)

   return (
      <section className={styles.Services}>
         <div className={`${styles.container} container`}>
            {services.map((service, index) => (
               <ServiceItem data={service} key={service.id} reverse={index % 2 !== 0} />
            ))}
         </div>
      </section>
   )
}

export default memo(Services)
