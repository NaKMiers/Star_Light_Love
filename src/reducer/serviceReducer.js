import service1_1 from '../assets/imgs/image21.jpg'
import service1_2 from '../assets/imgs/image24.jpg'
import service1_3 from '../assets/imgs/image2.JPEG'
import service1_4 from '../assets/imgs/image26.JPG'
import service1_5 from '../assets/imgs/image1.jpeg'
import service2_1 from '../assets/imgs/image6.JPEG'
import service2_2 from '../assets/imgs/image3.JPEG'
import service2_3 from '../assets/imgs/image4.JPEG'
import service2_4 from '../assets/imgs/image9.jpg'
import service2_5 from '../assets/imgs/image11.jpg'
import service3_1 from '../assets/imgs/image7.JPEG'
import service3_2 from '../assets/imgs/image14.jpg'
import service3_3 from '../assets/imgs/image23.jpg'
import service3_4 from '../assets/imgs/image5.JPEG'
import service3_5 from '../assets/imgs/image28.JPG'
import { faCamera, faFlag, faPencil } from '@fortawesome/free-solid-svg-icons'

const initState = [
   {
      id: 1,
      title: 'CREATIVE PHOTOGRAPHY',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\neiusmod tempor incididunt ut labore et dolore magna aliqua:',
      icon: faCamera,
      features: [
         'Lorem ipsum dolor sit amet',
         'Sed do eiusmod tempor',
         'Ut enim ad minim veniam',
         'Duis aute irure dolor in reprehenderit',
      ],
      mainImage: service1_1,
      subImages: [service1_2, service1_3, service1_4, service1_5],
   },

   {
      id: 2,
      title: 'GRAPHIC DESIGN',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\neiusmod tempor incididunt ut labore et dolore magna aliqua:',
      icon: faFlag,
      features: [
         'Lorem ipsum dolor sit amet',
         'Sed do eiusmod tempor',
         'Ut enim ad minim veniam',
         'Duis aute irure dolor in reprehenderit',
      ],
      mainImage: service2_1,
      subImages: [service2_2, service2_3, service2_4, service2_5],
   },

   {
      id: 3,
      title: 'ILLUSTRATION DESIGN',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\neiusmod tempor incididunt ut labore et dolore magna aliqua:',
      icon: faPencil,
      features: [
         'Lorem ipsum dolor sit amet',
         'Sed do eiusmod tempor',
         'Ut enim ad minim veniam',
         'Duis aute irure dolor in reprehenderit',
      ],
      mainImage: service3_1,
      subImages: [service3_2, service3_3, service3_4, service3_5],
   },
]

function serviceReducer(state = initState, action) {
   switch (action.type) {
      case '':
         return state

      default:
         return state
   }
}

export default serviceReducer
