import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useRef } from 'react'
import styles from './style.module.scss'
import { useDispatch } from 'react-redux'
import actions from '../../actions'

function SubImageItem({ datum, data }) {
   const dispatch = useDispatch()
   const overlayRef = useRef(null)

   const handleReviewImage = useCallback(() => {
      dispatch(actions.reviewMedia(datum))
      dispatch(actions.setUpAutoPlay(data))
   }, [data, datum, dispatch])

   return (
      <div className={styles.subImageItem} onClick={handleReviewImage}>
         <img src={datum} alt='thumbnail' />

         <div className={styles.overlay} ref={overlayRef}>
            <div className={styles.iconWrap}>
               <div className={styles.icon}>
                  <FontAwesomeIcon icon={faCamera} />
               </div>
            </div>
         </div>
      </div>
   )
}

export default memo(SubImageItem)
