import React from 'react'
import Container from '../../ui/Container'

import apple from '../../../assets/images/pages/newsroom/appstore.png'
import google from '../../../assets/images/pages/newsroom/google.png'
import qrcode from '../../../assets/images/pages/newsroom/qrcode.png'
import appPoster from '../../../assets/images/pages/newsroom/app-poster.png'

const FindAndHire = () => {
  return (
    <div className='my-16'>
      <Container>
        <div className='flex flex-col lg:flex-row gap-8'>
          <div className='flex-1 flex justify-start items-center order-2 lg:order-1'>
            <div>
              <h2 className='text-primary font-bold text-3xl'>
                When you need to hire
                someone - a landscaper, a Cleaner, anyone - Serviceklick finds them for you for free.
              </h2>
              <p className='mt-4 text-darkGray font-medium text-base'>
              See price estimates, read reviews and chat with pros, all in the app.
              </p>
              <div className='flex gap-4 mt-4'>
                <div><img src={apple} alt="apple store" className='w-full' /></div>
                <div><img src={google} alt="google play store" className='w-full' /></div>
                <div><img src={qrcode} alt="qr code" className='w-full' /></div>
              </div>
            </div>
          </div>
          <div className='flex-1 order-1 lg:order-2'>
            <div className='flex justify-center items-start'>
              <img src={appPoster} alt="application banner" className='w-fill' />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default FindAndHire