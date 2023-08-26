import React from 'react'
import { Container } from 'react-bootstrap'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import BlogHeader from '../components/BlogHeader/BlogHeader'
import BlogView from '../components/BlogView/BlogView'
import Footer from '../components/Footer/Footer'
import PagePagination from '../components/PagePagination/PagePagination'

export default function Blog() {
  return (
    <>
        <NavigationBar />
        <section id='top-section'>
            <BlogHeader />
        </section>
        <section id='card-section'>
            <BlogView />
            <PagePagination />
        </section>
        <Footer />
    </>

  )
}
