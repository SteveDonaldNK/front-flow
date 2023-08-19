import React from 'react'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import PostBanner from '../components/PostBanner/PostBanner'
import PostHeader from '../components/PostHeader/PostHeader'
import { Container } from 'react-bootstrap'
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
      <NavigationBar />
      <Container style={{padding: '0 20%'}} fluid>
        <PostHeader />
        <PostBanner />
        <PostBody />
        <PostFooter />
        <BottomNavBar />
        <PostOwner />
        <MorePosts />
      </Container>
      <Line />
      <Container style={{padding: '0 20%'}} fluid>
        <Recommendation />
      </Container>
      <Footer />
    </>
  )
}
