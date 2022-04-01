import React from 'react'

import MarginBottom from '../components/shared/spacing/MarginBottom'
import Poster from '../components/pages/newsroom/Poster'
import Tabs from '../components/pages/newsroom/Tabs'
import Posts from '../components/shared/Posts'
import LoadButton from '../components/pages/newsroom/LoadButton'
import PopularBlogs from '../components/pages/newsroom/PopularBlogs'
import Banner from '../components/pages/newsroom/Banner'
import ServiceAd from '../components/shared/ServiceAd'
import Footer from '../components/shared/navigation/Footer'

const Newsroom = () => {
  const postsData1 = [
    { title: 'How to find local professionals for pretty much anything.',date:'February 20, 2022', category: 'News' },
    { title: 'How to find local professionals for pretty much anything.',date:'February 20, 2022', category: 'News' },
    { title: 'How to find local professionals for pretty much anything.',date:'February 20, 2022', category: 'News' },
    { title: 'How to find local professionals for pretty much anything.',date:'February 20, 2022', category: 'News' }
  ];
  const postsData2 = [
    { title: 'How to find local professionals for pretty much anything.',date:'February 20, 2022', category: 'News' },
    { title: 'How to find local professionals for pretty much anything.',date:'February 20, 2022', category: 'News' },
    { title: 'How to find local professionals for pretty much anything.',date:'February 20, 2022', category: 'News' }
  ];
  return (
    <div>
      <Poster />
      <MarginBottom margin={8} />
      <Tabs />
      <MarginBottom margin={8} />
      <Posts postsData={postsData2} postsPerRow={3} />
      <MarginBottom margin={16} />
      <Posts postsData={postsData1} postsPerRow={4} />
      <LoadButton />
      <MarginBottom margin={16} />
      <PopularBlogs />
      <MarginBottom margin={16} />
      <Banner />
      <MarginBottom margin={16} />
      <ServiceAd />
      <MarginBottom margin={16} />
      <Footer />
    </div>
  )
}

export default Newsroom