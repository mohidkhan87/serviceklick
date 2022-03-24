import React from 'react'

import Header from '../components/shared/navigation/Header'
import Footer from '../components/shared/navigation/Footer'

import Poster from '../components/pages/newsroom/Poster'
import Blogs from '../components/pages/newsroom/Blogs'
import PopularBlogs from '../components/pages/newsroom/Blogs'
import FindAndHire from '../components/pages/newsroom/FindAndHire'

const Newsroom = () => {
  return (
    <div>
      <Header title="Serviceklick Newsroom" />

      <Poster />
      <Blogs />
      <PopularBlogs />
      <FindAndHire />

      <Footer />
    </div>
  )
}

export default Newsroom