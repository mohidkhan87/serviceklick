import React from 'react'

import MarginBottom from '../components/shared/spacing/MarginBottom';
import HeaderWithSearch from '../components/shared/navigation/HeaderWithSearch'
import Content from '../components/pages/blogPost/Content'
import Footer from '../components/shared/navigation/Footer'

const BlogPost = () => {
  return (
    <>
      <div className='relative z-30'>
        <HeaderWithSearch background="white" textColor="primary" isAbsolute={false} />
      </div>
      <Content />
      <MarginBottom margin={16} />
      <Footer />
    </>
  )
}

export default BlogPost