import React from 'react'
import styles from './App.module.scss'
import Navigation from './components/Navigation'
import ScrollToTopButton from './components/ScrollToTopButton'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
// import PortfolioPage from './pages/PortfolioPage'
// import ProjectPage from './pages/ProjectPage'
// import ServicesPage from './pages/ServicesPage'
// import BlogsPage from './pages/BlogsPage'
// import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
// import CategoriesPage from './pages/CategoriesPage'
import MediaReview from './components/MediaReview'

function App() {
   return (
      <div className={styles.App}>
         <Navigation />

         <Routes>
            <Route path='/' exact element={<HomePage />} />
            <Route path='/about-us' exact element={<AboutUsPage />} />
            {/* <Route path='/portfolio' exact element={<PortfolioPage />} /> */}
            {/* <Route path='/portfolio/:id' exact={false} element={<ProjectPage />} /> */}
            {/* <Route path='/services' exact element={<ServicesPage />} /> */}
            {/* <Route path='/blogs' exact element={<BlogsPage />} /> */}
            {/* <Route path='/blogs/:id' exact={false} element={<BlogPage />} /> */}
            <Route path='/contact' exact element={<ContactPage />} />
            {/* <Route path='/categories' exact element={<CategoriesPage />} /> */}
            <Route path='*' exact={false} element={<NotFoundPage />} />
         </Routes>

         <MediaReview />
         <ScrollToTopButton />
      </div>
   )
}

export default App
