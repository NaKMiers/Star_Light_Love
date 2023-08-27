import React, { memo, useEffect } from 'react'
import styles from './style.module.scss'
import PageHeading from '../../components/PageHeading'
import ContactInfo from '../../components/ContactInfo'
import ContactForm from '../../components/ContactForm'

const informations = [
   {
      id: 1,
      name: 'Anpha Right Choice 😊',
      address: [
         '49 Trinh Dinh Trong Street',
         'Phu Trung Ward, Tan Phu District',
         'Ho Chi Minh City, Vietnam',
      ],
      phone: ['Phone: +84 899 320 427', 'Mobile: +84 899 320 427', 'Fax: +84 899 320 427'],
      email: ['diwas118151@gmail.com', 'https://iamnak.info', 'cosanpha.omega@gmail.com'],
      facebook: ['https://www.facebook.com/pipix149'],
      twitter: ['https://twitter.com/NaKMiers'],
      instagram: ['https://www.instagram.com/pipix149'],
      pinterest: ['https://www.pinterest.com/nakmiers'],
      zalo: ['+84 899320427'],
      tiktok: ['https://www.tiktok.com/@nakmiers'],
   },
   {
      id: 2,
      name: 'Empe HC 🥺',
      address: ['343/7E To Hien Thanh Street', 'Ward 12, District 10', 'Ho Chi Minh City, Vietnam'],
      phone: ['Phone: +84 383 175 948', 'Mobile: +84 383 175 948', 'Fax: +84 383 175 948'],
      email: ['hothingoctram03@gmail.com', 'tkim9973@gmail.com'],
      facebook: ['https://www.facebook.com/htnt.lim'],
      twitter: ['https://twitter.com/_jinuzz'],
      instagram: ['https://www.instagram.com/__blmdy'],
      pinterest: ['https://www.pinterest.com/limjinneez'],
      zalo: ['+84 383175948'],
      tiktok: ['https://www.tiktok.com/@chinutt_'],
   },
]

function ContactPage() {
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   return (
      <div className={styles.ContactPage}>
         <PageHeading title={'Anpha Right Choice \n💕o(*￣▽￣*)ブ💕\nEmpe HC'} subTitle='Contact Info' />

         {informations.map((info, index) => (
            <ContactInfo info={info} key={info.id} />
         ))}

         <ContactForm />
      </div>
   )
}

export default memo(ContactPage)
