import { faCamera, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import actions from '../../actions'
import blogImage1 from '../../assets/imgs/blogImage1.jpg'
import blogImage2 from '../../assets/imgs/blogImage2.jpg'
import blogImage3 from '../../assets/imgs/blogImage3.jpg'
import facebook from '../../assets/imgs/facebookWhite.png'
import linkedin from '../../assets/imgs/linkedinWhite.png'
import pinterest from '../../assets/imgs/pinterestWhite.png'
import reddit from '../../assets/imgs/redditWhite.png'
import tumblr from '../../assets/imgs/tumblrWhite.png'
import twitter from '../../assets/imgs/twitterWhite.png'
import MetaBar from '../MetaBar'
import PostComment from '../PostComment'
import RelatedPosts from '../RelatedPosts'
import styles from './style.module.scss'

function Blog({ data }) {
   const dispath = useDispatch()

   return (
      <section className={styles.Blog}>
         <div className={`${styles.container} container`}>
            {/* Meta */}
            <MetaBar data={data} />

            {/* Content */}
            <div className={styles.contentWrap}>
               <div className={styles.contentItem}>
                  <div className={styles.image}>
                     <img src={data.thumbnails[0]} alt='blog' />

                     <div className={styles.overlay}>
                        <div className={styles.iconWrap}>
                           <div
                              className={styles.icon}
                              onClick={() => dispath(actions.reviewMedia(blogImage1))}
                           >
                              <FontAwesomeIcon icon={faCamera} />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={styles.content1}>
                     <h4 className={`${styles.title} h4Title`}>LOREM IPSUM DOLOR SIT AMET</h4>

                     <p className={`${styles.paragraph} paragraph`}>
                        Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt.
                     </p>

                     <ul className={styles.features}>
                        <li>Lorem ipsum dolor sit amet, consectetur adi pisicing elit</li>
                        <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                        <li>
                           Ut enim ad minim veniam, quis exercitation ullamco laboris nisiut aliquip
                        </li>
                        <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
                     </ul>
                  </div>
               </div>

               <div className={styles.contentItem}>
                  <div className={styles.image}>
                     <img src={data.thumbnails[1]} alt='blog' />

                     <div className={styles.overlay}>
                        <div className={styles.iconWrap}>
                           <div
                              className={styles.icon}
                              onClick={() => dispath(actions.reviewMedia(blogImage2))}
                           >
                              <FontAwesomeIcon icon={faCamera} />
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className={styles.content2}>
                     <h4 className={`${styles.title} h4Title`}>LOREM IPSUM DOLOR SIT AMET</h4>

                     <p className={`${styles.paragraph} paragraph`}>
                        <span className={styles.dropcap}>L</span>eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum. Sed ut erspiciatis unde omnis iste. Nemo enim ipsam voluptatem
                        quia.
                     </p>
                     <p className={`${styles.paragraph} paragraph`}>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                        quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                        porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                        velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                        aliquam quaerat voluptatem. Lorem ipsum dolor sit amet adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore.
                     </p>
                  </div>
               </div>

               <div className={styles.contentItem}>
                  <div className={styles.image}>
                     <img src={data.thumbnails[2]} alt='blog' />

                     <div className={styles.overlay}>
                        <div className={styles.iconWrap}>
                           <div
                              className={styles.icon}
                              onClick={() => dispath(actions.reviewMedia(blogImage3))}
                           >
                              <FontAwesomeIcon icon={faCamera} />
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className={styles.content3}>
                     <h4 className={`${styles.title} h4Title`}>LOREM IPSUM DOLOR SIT AMET</h4>

                     <p className={`${styles.paragraph} paragraph`}>
                        Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        exercitation ullamco laboris nisiut aliquip ex ea commodo consequat.
                     </p>

                     <div className={styles.textBoxWrap}>
                        <div className={styles.textBoxItem}>
                           <span>1</span>
                           <span>Lorem ipsum dolor sit amet consectetur</span>
                        </div>
                        <div className={styles.textBoxItem}>
                           <span>2</span>
                           <span>Lorem ipsum dolor sit amet consectetur</span>
                        </div>
                        <div className={styles.textBoxItem}>
                           <span>3</span>
                           <span>Lorem ipsum dolor sit amet consectetur</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Tags */}
            <div className={styles.postTags}>
               <Link to='/categories' className={styles.tag}>
                  Creative Photography
               </Link>
               <Link to='/categories' className={styles.tag}>
                  Minimalism
               </Link>
               <Link to='/categories' className={styles.tag}>
                  Photo Project
               </Link>
               <Link to='/categories' className={styles.tag}>
                  Showcase
               </Link>
               <Link to='/categories' className={styles.tag}>
                  Trendy Layout
               </Link>
            </div>

            {/* Socials */}
            <div className={styles.socialsWrap}>
               <a
                  className={styles.social}
                  href='https://www.facebook.com'
                  target='_blank'
                  rel='noreferrer'
               >
                  <img src={facebook} alt='social' />
               </a>
               <a className={styles.social} href='https://twitter.com' target='_blank' rel='noreferrer'>
                  <img src={twitter} alt='social' />
               </a>
               <a
                  className={styles.social}
                  href='https://www.pinterest.com'
                  target='_blank'
                  rel='noreferrer'
               >
                  <img src={pinterest} alt='social' />
               </a>
               <a
                  className={styles.social}
                  href='https://www.tumblr.com/'
                  target='_blank'
                  rel='noreferrer'
               >
                  <img src={tumblr} alt='social' />
               </a>
               <a
                  className={styles.social}
                  href='https://www.linkedin.com'
                  target='_blank'
                  rel='noreferrer'
               >
                  <img src={linkedin} alt='social' />
               </a>
               <a
                  className={styles.social}
                  href='https://www.reddit.com/'
                  target='_blank'
                  rel='noreferrer'
               >
                  <img src={reddit} alt='social' />
               </a>
            </div>

            {/* Author */}
            <div className={styles.author}>
               <div className={styles.avatar}>
                  <img src={data.authorAvt} alt='avatar' />
               </div>

               <div className={styles.detail}>
                  <p>
                     <span>{data.author}</span> / About Author
                  </p>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                     exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                     irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                     pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                     deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error
                     sit voluptatem accusantium doloremque laudantium.
                  </p>

                  <Link to='/blogs' className={styles.more}>
                     <div>
                        <FontAwesomeIcon icon={faChevronRight} />
                     </div>
                     <span>More posts by {data.author}</span>
                  </Link>
               </div>
            </div>

            {/* RelatedPosts */}
            <RelatedPosts />

            {/* PostComment */}
            <PostComment />
         </div>
      </section>
   )
}

export default memo(Blog)
