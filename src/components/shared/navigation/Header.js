import React from 'react'
// import { Link } from "react-router-dom";

import Container from '../../ui/Container'
import Logo from '../../../assets/images/logo.png'
import Globe from '../../../assets/images/pages/homepage/globe.svg'

const Header = () => {
  return (
      <div className="w-full absolute top-0 left-0">
    <Container>
      <div className="w-full flex justify-between items-center py-5 text-white">
        <div className="flex items-center gap-3">
          <img src={Logo} alt="" />
          <h1 className="text-2xl font-bold">Serviceklick</h1>
        </div>
        <div className="hidden md:flex items-center gap-7">
          <p>How it Works</p>
          <p>Abouts Us</p>
          <p>Newsroom</p>
          <div><img src={Globe} alt="" /></div>
          <button className="py-2 px-6 rounded-full font-bold text-black bg-white">Join</button>
        </div>
        </div>
    </Container>
      </div>
  )
}

export default Header