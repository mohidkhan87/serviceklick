import React from 'react'

import Poster from '../components/pages/homepage/Poster'
import Services from '../components/pages/homepage/Services'
import Satisfaction from '../components/pages/homepage/Satisfaction';
import Benefits from '../components/pages/homepage/Benefits';
import News from '../components/pages/homepage/News';

const Home = () => {
    return (
        <div>
            <Poster />
            <Services />
            <Satisfaction />
            <Benefits />
            <News />
        </div>
    )
}

export default Home