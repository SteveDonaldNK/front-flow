import React from 'react'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import PostBanner from '../components/PostBanner/PostBanner'
import PostHeader from '../components/PostHeader/PostHeader'
import PostBody from '../components/PostBody/PostBody'
import PostFooter from '../components/PostFooter/PostFooter'
import BottomNavBar from '../components/BottomNavBar/BottomNavBar'
import PostOwner from '../components/PostOwner/PostOwner'
import MorePosts from '../components/MorePosts/MorePosts'
import Footer from '../components/Footer/Footer'
import Line from '../components/Line/Line'
import Recommendation from '../components/Recommendation/Recommendation'

export default function Post() {
  return (
    <>
      {/* <NavigationBar /> */}
      <section id='post-section' style={{padding: '0 20%'}}>
        <PostHeader />
        <PostBanner />
        <PostBody />
        <PostFooter />
        <BottomNavBar />
        <PostOwner />
        <Line mt={3} mb={3} />
        <MorePosts />
      </section>
      <Line mt={5} mb={5} />
      <section id='recommendation-section' style={{padding: '0 20%'}}>
        <Recommendation />
      </section>
      <section id='footer-section'>
        <Footer />
      </section>
    </>
  )
}
