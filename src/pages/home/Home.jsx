import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/hSection/HSection'
import BlogPostCard from '../../components/blogPostCard/BlogPostCard'

const Home = () => {
  return (
    <Layout>
      <HeroSection/>
      <BlogPostCard/>
    </Layout>
  )
}

export default Home