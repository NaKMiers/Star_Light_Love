import React, { memo, useEffect } from 'react'
import styles from './style.module.scss'
import TopIntroduce from '../../components/TopIntroduce'
import BottomIntroduce from '../../components/BottomIntroduce'
import Statictical from '../../components/Statictical'
import banner1 from '../../assets/imgs/image129.JPEG'
import banner2 from '../../assets/imgs/image104.JPEG'
import banner3 from '../../assets/imgs/image1.jpeg'
import banner4 from '../../assets/imgs/image45.JPEG'

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
            percent: 1,
            content:
               'Sometimes you make my heart ache, but just looking at you, it beats crazily again.',
         },
      ],

      loveTitle:
         'From a STRANGER to a SISTER to a BEST FRIEND to a BABY to a LOVER to a DARLING and to MY ALL LIFE',
      //       information: `
      // Từ người lạ trở thành người thương
      // Từng giây phút học, từng bước đường
      // Ngồi kề bên, tim đập rộn rã
      // Chuyện trêu đùa, tiếng cười giòn giã.

      // Nhớ về cô ấy, mỗi ngày dài
      // Mong đến lúc học, ghét lúc về
      // Tuần hai buổi học, nhiều vội vã
      // Trong tâm hồn ta, tình nở hoa.

      // Kết bạn trên mạng, tin nhắn trao
      // Cười đùa vua tưởi, giữa đêm sao
      // Tôi gọi empe, chị trả lời
      // Từng chữ ngọt ngào, như gọi mời.

      // Rủ đi xem phim, tim rối bời
      // Đầu anh trống rỗng, không biết trả lời
      // Dịu dàng tỏ tình, hôn nhẹ môi
      // Tình yêu chân thành, mãi không thôi.

      // Tình càng thêm sâu, càng tràn đầy
      // Ở bên em đây, sàng sum vầy
      // Thoải mái, hạnh phúc, là chính mình
      // Định mệnh kết nối, một mối tình.

      // Từ người lạ, người yêu, đến người thương
      // Người tình ngọt ngào, như mật hương
      // Từ giây phút ấy, tay trong tay
      // Cùng bước đi, trọn kiếp không phai.

      // - Anpha Right Choice gửi Empe HC -
      // `,
      information: `
From a stranger to a beloved one's embrace,
Every learning moment, every path we trace.
Sitting by your side, heart's rhythm so clear,
Teasing tales and laughter, a melody to hear.

Thinking of you, each extended day,
Longing for class, wishing it away.
Twice a week we'd meet in a hurried dance,
In my soul, our love would bloom and enhance.

Online friends we became, messages shared,
Laughter in abundance, as stars glared.
I'd call you "Empe", and you'd answer so sweet,
Each word a gentle invitation, our connection complete.

Inviting you to movies, my heart a maze,
Lost for words, in a bewildering daze.
Tenderly confessing, a kiss so light,
Genuine love blooming, forever in sight.

Deeper our affaction grew, overflowing tide,
Beside you, life's confort, nowhere to hide.
Confortable and happy, being truly me,
Destined entwining, a love so free.

From stranger to lover, to someone so dear,
Sweetheart's embrace, like nectar so clear.
From that very moment, hand in hand we'd stay,
Walking life's path, unfading, come what may.

Anpha Right Choice dear to Empe HC -
`,
   },

   {
      name: 'Empe HC',
      title: "I am Anpha Right Choice's empe!",
      introduce: "You're not my choice, you're my once in a lifetime.",
      banner: [banner3, banner4],
      staticticals: [
         {
            label: 'Comfortable',
            percent: 97,
            content: "You're my blue. You take all my worries away.",
         },
         {
            label: 'Be myself',
            percent: 90,
            content: 'My room, I can be me, when i beside you.',
         },
         {
            label: 'Happiness',
            percent: 101,
            content: 'Overhappiness when I am with you.',
         },
         {
            label: 'Painful',
            percent: 3,
            content: 'Even though you break my bones, crash my heart, It just like a mosquito bite.',
         },
      ],

      loveTitle: 'You slowly enter my life - You become my world.',
      information: `
   Start with being classmates, you slowly coming into my life, lighting up and becoming my world. When I talk to you, I gradually realize that you are my destiny.
If it's not you, it's not anyone.
   In your warm embrace, I've found where I belong, where my heart belongs. You are my home, a place where my heart truly resides.
   With every shared moment and everything we do together, I realize obviously that you are my whole life. You and your love brighten my soul, warms my heart even on the darkest days. You’ve taught me a lot of things, you’re a lighthouse lead me to find the answers for my biggest question.
   I really mean to say that “YOU’RE MY ALL AND MORE” I don’t need any room to be me, all I need is YOU, just YOU…
   `,
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
