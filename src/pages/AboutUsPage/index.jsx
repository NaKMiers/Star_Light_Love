import React, { memo, useEffect } from 'react'
import styles from './style.module.scss'
import TopIntroduce from '../../components/TopIntroduce'
import BottomIntroduce from '../../components/BottomIntroduce'
import Statictical from '../../components/Statictical'
import banner1 from '../../assets/imgs/image129.JPEG'
import banner2 from '../../assets/imgs/image104.JPEG'
import banner3 from '../../assets/imgs/image1.jpeg'
import banner4 from '../../assets/imgs/image93.JPEG'

const in4s = [
   {
      name: 'Anpha Right Choice',
      title: "I am Empe HC's man!",
      introduce:
         'I am the person who brings her the peace, happiness, safe and comfort, will be the fulcrum, the listener and the healer of her pain. I promise!',
      banner: [banner1, banner2],
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
      infomation: `
Từ người lạ trở thành người thương
Từng giây phút học, từng bước đường
Ngồi kề bên, tim đập rộn rã
Chuyện trêu đùa, tiếng cười giòn giã.

Nhớ về cô ấy, mỗi ngày dài
Mong đến lúc học, ghét lúc về
Tuần hai buổi học, nhiều vội vã
Trong tâm hồn ta, tình nở hoa.

Kết bạn trên mạng, tin nhắn trao
Cười đùa vua tưởi, giữa đêm sao
Tôi gọi empe, chị trả lời
Từng chữ ngọt ngào, như gọi mời.

Rủ đi xem phim, tim rối bời
Đầu anh trống rỗng, không biết trả lời
Dịu dàng tỏ tình, hôn nhẹ môi
Tình yêu chân thành, mãi không thôi.

Tình càng thêm sâu, càng tràn đầy
Ở bên em đây, sàng sum vầy
Thoải mái, hạnh phúc, là chính mình
Định mệnh kết nối, một mối tình.

Từ người lạ, người yêu, đến người thương
Người tình ngọt ngào, như mật hương
Từ giây phút ấy, tay trong tay
Cùng bước đi, trọn kiếp không phai.

- Anpha Right Choice gửi Empe HC -
`,
   },

   {
      name: 'Empe HC',
      title: "I am Anpha Right Choice's empe!",
      introduce: '...............................................................................!',
      banner: [banner3, banner4],
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

      loveTitle: '......................................................',
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
