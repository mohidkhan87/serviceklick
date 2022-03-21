import React from 'react'

import Services from '../components/pages/homepage/Services'
import Satisfaction from '../components/pages/homepage/Satisfaction';
import Benefits from '../components/pages/homepage/Benefits';
import News from '../components/pages/homepage/News';

const Home = () => {
    return (
        <div>
            <Services />
            <Satisfaction />
            <Benefits />
            <News />
        </div>
    )
}

export default Home