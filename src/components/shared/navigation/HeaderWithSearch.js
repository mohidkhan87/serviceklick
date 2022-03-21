import React from 'react'
import { Link } from 'react-router-dom'

import Container from '../../ui/Container'
import Logo from '../../../assets/images/logo.png'
import Globe from '../../../assets/images/Globe.svg'

const HeaderWithSearch = () => {
  return (
    <div className='border-b'>
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5'>
                <div>
                    <div className='flex gap-4'>
                        <div><img src={Logo} alt="logo" /></div>
                        <div className='flex items-center'><h1 className='text-primary font-medium text-2xl'>Help Center</h1></div>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <div className='border h-full rounded-3xl py-1 pl-4 pr-1'>
                        <div className='grid grid-cols-3 h-full gap-4'>
                            <div className='col-span-2'><input type='text' placeholder='Search for help articles' className='outline-none w-full h-full text-sm' /></div>
                            <div className='h-full'><button className='bg-secondary w-full h-full rounded-full text-white font-bold text-xs'>Search</button></div>
                        </div>
                    </div>
                </div>
                <div className='hidden md:flex justify-end'>
                    <div className='flex items-center gap-6'>
                        <div><p><Link to="/">Blog</Link></p></div>
                        <div><p><Link to="/">Contact Us</Link></p></div>
                        <div><img src={Globe} alt="globe" /></div>
                        <div><button className='bg-primary text-white font-bold text-sm px-5 py-3 rounded-full'>Join</button></div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default HeaderWithSearch