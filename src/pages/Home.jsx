import React from 'react'
import Navbar from '../components/Navbar/NavigationBar'
import Banner from '../components/Banner/Banner'
import RecentPosts from '../components/RecentPosts/RecentPosts'

export default function Home() {
  return (
    <div>
       <section style={{height: '100vh'}} id='main-section'>
        <Navbar />
        <Banner />
       </section>
       <section id='recentPosts-section'>
        <RecentPosts />
       </section>
    </div>
  )
}
