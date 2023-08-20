import blogImg1 from '../assets/imgs/blogImg1.jpg'
import blogImg2 from '../assets/imgs/blogImg2.jpg'
import blogImg3 from '../assets/imgs/blogImg3.jpg'
import blogImg4 from '../assets/imgs/blogImg4.jpg'
import blogImg5 from '../assets/imgs/blogImg5.jpg'
import blogImg6 from '../assets/imgs/blogImg6.jpg'

import blogImage1 from '../assets/imgs/blogImage1.jpg'
import blogImage2 from '../assets/imgs/blogImage2.jpg'
import blogImage3 from '../assets/imgs/blogImage3.jpg'

import admin from '../assets/imgs/admin.jpg'

const initState = {
   posts: [
      {
         id: 1,
         title: 'Web Project',
         subTitle: 'Latest news from the blogs',
         categories: ['Creative Web Project', 'Showcase'],
         image: blogImg1,
         date: 'January 3, 2019',
         author: 'admin',
         thumbnails: [blogImage1, blogImage2, blogImage3],
         comments: 0,
         likes: 1,
         authorAvt: admin,
         createdAt: 1685762967175,
         desc: 'Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis exercitation ullamco laboris nisiut aliquip ex ea commodo.',
      },
      {
         id: 2,
         title: 'Creative Photography',
         subTitle: 'Latest news from the blogs',
         categories: ['Creative Web Project', 'Showcase', 'Trendy Layout'],
         image: blogImg2,
         date: 'January 3, 2019',
         author: 'admin',
         thumbnails: [blogImage1, blogImage2, blogImage3],
         comments: 0,
         likes: 1,
         authorAvt: admin,
         createdAt: 1685762964623,
         desc: 'Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis exercitation ullamco laboris nisiut aliquip ex ea commodo.',
      },
      {
         id: 3,
         title: 'Post Minimalism',
         subTitle: 'Latest news from the blogs',
         categories: ['Creative Web Project', 'Trendy Layout'],
         image: blogImg3,
         date: 'February 25, 2019',
         author: 'admin',
         thumbnails: [blogImage1, blogImage2, blogImage3],
         comments: 0,
         likes: 1,
         authorAvt: admin,
         createdAt: 1685762965645,
         desc: 'Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis exercitation ullamco laboris nisiut aliquip ex ea commodo.',
      },
      {
         id: 4,
         title: 'Photo Project',
         subTitle: 'Latest news from the blogs',
         categories: ['Creative Web Project', 'Showcase'],
         image: blogImg4,
         date: 'February 25, 2019',
         author: 'admin',
         thumbnails: [blogImage1, blogImage2, blogImage3],
         comments: 0,
         likes: 1,
         authorAvt: admin,
         createdAt: 1685762963546,
         desc: 'Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis exercitation ullamco laboris nisiut aliquip ex ea commodo.',
      },
      {
         id: 5,
         title: 'Showcase Post',
         subTitle: 'Latest news from the blogs',
         categories: ['Showcase', 'Trendy Layout'],
         image: blogImg5,
         date: 'February 25, 2019',
         author: 'admin',
         thumbnails: [blogImage1, blogImage2, blogImage3],
         comments: 0,
         likes: 1,
         authorAvt: admin,
         createdAt: 1685762964563,
         desc: 'Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis exercitation ullamco laboris nisiut aliquip ex ea commodo.',
      },
      {
         id: 6,
         title: 'Trendy Layout',
         subTitle: 'Latest news from the blogs',
         categories: ['Creative Web Project', 'Showcase', 'Trendy Layout'],
         image: blogImg6,
         date: 'February 25, 2019',
         author: 'admin',
         thumbnails: [blogImage1, blogImage2, blogImage3],
         comments: 0,
         likes: 1,
         authorAvt: admin,
         createdAt: 1685762961145,
         desc: 'Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis exercitation ullamco laboris nisiut aliquip ex ea commodo.',
      },
   ],

   relatedPosts: [3, 1, 4, 6, 5],
   categoryPosts: [6, 4, 3, 2, 1],
}

function blogReducer(state = initState, action) {
   switch (action.type) {
      case '':
         return state

      default:
         return state
   }
}

export default blogReducer
