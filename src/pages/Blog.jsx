import React from 'react'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import BlogHeader from '../components/BlogHeader/BlogHeader'
import BlogView from '../components/BlogView/BlogView'
import Footer from '../components/Footer/Footer'

export default function Blog() {
  return (
    <>
        <NavigationBar />
        <section id='top-section'>
            <BlogHeader />
        </section>
        <section id='card-section'>
            <BlogView />
        </section>
        <section id='footer-section'>
          <Footer />
        </section>
    </>

  )
}
