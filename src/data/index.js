import client1 from '../assets/imgs/client1.jpg'
import client2 from '../assets/imgs/client2.jpg'
import client3 from '../assets/imgs/admin.jpg'

// clients say about us
export const oriTestimonials = [
   {
      name: 'JENIFFER BURNS',
      company: 'Creative Heads Inc.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      avatar: client1,
   },

   {
      name: 'GORDON EDWARDS',
      company: 'Creative Heads Inc.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      avatar: client2,
   },

   {
      name: 'ANH KHOA',
      company: 'Creative Heads Inc.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      avatar: client3,
   },
]
export const testimonials = [
   oriTestimonials[oriTestimonials.length - 1],
   ...oriTestimonials,
   oriTestimonials[0],
]
