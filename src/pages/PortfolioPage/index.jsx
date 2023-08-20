import React, { memo, useEffect } from 'react'
import styles from './style.module.scss'
import PageHeading from '../../components/PageHeading'
import Portfolio from '../../components/Portfolio'

function PortfolioPage() {
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   return (
      <div className={styles.PortfolioPage}>
         <PageHeading title={`My Portfolios`} subTitle='LATEST WORKS' />
         <Portfolio />
      </div>
   )
}

export default memo(PortfolioPage)
