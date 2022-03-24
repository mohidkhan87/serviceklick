import React from 'react'
// import { Link } from "react-router-dom";

import Container from '../../ui/Container'
import Logo from '../../../assets/images/logo.png'
import Globe from '../../../assets/images/Globe.svg'

const Header = ({ title }) => {
    return (
        <div className="w-full">
            <Container>
                <div className="w-full flex justify-between items-center py-5 text-white">
                    <div className="flex items-center gap-3">
                        <img src={Logo} alt="" />
                        <h1 className="text-primary text-3xl">{title}</h1>
                    </div>
                    <div className=" hidden md:flex items-center gap-7 text-primary">
                        <p>How it Works</p>
                        <p>Abouts Us</p>
                        <p>Newsroom</p>
                        <div><img src={Globe} alt="globe" className='text-primary' /></div>
                        <button className="py-2 px-6 rounded-full text-sm font-bold text-white bg-primary">Join</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header