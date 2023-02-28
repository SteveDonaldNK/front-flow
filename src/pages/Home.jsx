import React from 'react'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import Banner from '../components/Banner/Banner'
import RecentPosts from '../components/RecentPosts/RecentPosts'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <div>
       <section style={{height: '100vh'}} id='main-section'>
        <NavigationBar />
        <Banner />
       </section>
       <section id='recentPosts-section'>
        <RecentPosts />
       </section>
       <section id='footer-section'>
        <Footer />
       </section>
    </div>
  )
}
