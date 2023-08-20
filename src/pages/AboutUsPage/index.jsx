import React, { memo, useEffect } from 'react'
import styles from './style.module.scss'
import TopIntroduce from '../../components/TopIntroduce'
import BottomIntroduce from '../../components/BottomIntroduce'
import Statictical from '../../components/Statictical'

const in4s = [
   {
      name: 'Anpha Right Choice',
      title: "I am Empe HC's man!",
      introduce:
         'I am the person who brings her the peace, happiness, safe and comfort, will be the fulcrum, the listener and the healer of her pain. I promise!',
      staticticals: [
         {
            label: 'Comfortable',
            percent: 95,
            content: "Tram, you're my room, where I can feel most comfortable.",
         },
         {
            label: 'Be myself',
            percent: 90,
            content: 'By your side, my first personality is awakened.',
         },
         {
            label: 'Happiness',
            percent: 99,
            content:
               "I don't need to talk about this, because you already know how happy I am with you.",
         },
         {
            label: 'Painful',
            percent: 0,
            content:
               'Sometimes you make my heart ache, but just looking at you, it beats crazily again.',
         },
      ],

      loveTitle:
         'From a STRANGER to a SISTER to a BEST FRIEND to a BABY to a LOVER to a DARLING and to MY ALL LIFE',
      infomation: '',
   },

   {
      name: 'Empe HC',
      title: "I am Anpha Right Choice's empe!",
      introduce:
         '....................................................................................................................................................!',
      staticticals: [
         {
            label: 'Comfortable',
            percent: 0,
            content: '',
         },
         {
            label: 'Be myself',
            percent: 0,
            content: '',
         },
         {
            label: 'Happiness',
            percent: 0,
            content: '',
         },
         {
            label: 'Painful',
            percent: 0,
            content: '',
         },
      ],

      loveTitle: '..................................................................................',
      infomation: '',
   },
]

function AboutUsPage() {
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   return (
      <div className={styles.AboutUsPage}>
         <TopIntroduce in4s={in4s[0]} />
         <Statictical in4s={in4s[0]} />
         <BottomIntroduce in4s={in4s[0]} />

         <hr className={styles.separate} />

         <TopIntroduce reverse in4s={in4s[1]} />
         <Statictical in4s={in4s[1]} />
         <BottomIntroduce reverse in4s={in4s[1]} />
      </div>
   )
}

export default memo(AboutUsPage)
