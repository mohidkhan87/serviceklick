import React from 'react'

import MarginBottom from '../components/shared/spacing/MarginBottom'
import Poster from '../components/pages/newsroom/Poster'
import Tabs from '../components/pages/newsroom/Tabs'
import Posts from '../components/pages/newsroom/Posts'
import PopularBlogs from '../components/pages/newsroom/PopularBlogs'
import Banner from '../components/pages/newsroom/Banner'
import ServiceAd from '../components/shared/ServiceAd'
import Footer from '../components/shared/navigation/Footer'

const Newsroom = () => {
  return (
    <div>
      <Poster />
      <MarginBottom margin={8} />
      <Tabs />
      <MarginBottom margin={8} />
      <Posts />
      <MarginBottom margin={16} />
      <PopularBlogs />
      <MarginBottom margin={16} />
      <Banner />
      <MarginBottom margin={24} />
      <ServiceAd />
      <MarginBottom margin={24} />
      <Footer />
    </div>
  )
}

export default Newsroom