import React from 'react'

import Container from '../../ui/Container'
import Banner from '../../../assets/images/pages/newsroom/poster.png'
const Poster = () => {
  return (
    <div className='relative'>
      <div className='absolute top-0 right-0 w-3/5 h-80 myellipse bg-lightPink z-10'>asd</div>
      <Container>
        <div className='grid grid-cols-3 z-50'>
          <div className='flex items-center'>
            <div className='pt-10'>
              <p className='text-darkGray text-xs font-medium'>February 24, 2022</p>
              <h1 className='text-primary text-2xl font-bold mt-2'>
                How to find local professionals for pretty much anything.
              </h1>
              <button className='bg-secondary text-white font-bold mt-8 py-3 px-6 rounded-full inline-flex items-center'>
                Read more
                <svg width="23" height="16" className='ml-4' viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.1992 2L21.1992 8L15.1992 14" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M21.2 8H2" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
          </div>
          <div className='col-span-2 pt-10'>
            <div className='flex justify-center'>
              <img src={Banner} alt="Poster" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Poster