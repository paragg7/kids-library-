import EditorialStatement from '@/components/layout/EditorialStatement'
import ExploreCollection from '@/components/layout/ExploreCollection'
import FeaturedStories from '@/components/layout/FeaturedStories'
import Hero from '@/components/layout/Hero'
import NewsletterCTA from '@/components/layout/NewsletterCTA'
import WhyIllustrated from '@/components/layout/WhyIllustrated'
import React from 'react'

const Home = () => {
  return (
    <div><Hero/>
    
    <FeaturedStories/>

    <WhyIllustrated/>
    
    <ExploreCollection/>

    <EditorialStatement/>

    <NewsletterCTA/>

    </div>
  )
}

export default Home