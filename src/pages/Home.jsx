import React from 'react'
import Navbar from '../components/Navbar/NavigationBar'
import Banner from '../components/Banner/Banner'

export default function Home() {
  return (
    <div>
       <section style={{height: '100vh'}} id='main-section'>
        <Navbar />
        <Banner />
       </section>
    </div>
  )
}
