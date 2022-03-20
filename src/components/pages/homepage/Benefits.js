import React from 'react'
import Container from '../../ui/Container'

import Jung from '../../../assets/images/pages/homepage/jung.png'
import Nau from '../../../assets/images/pages/homepage/nau.png'

import Card from './benefits/Card'
const Benefits = () => {
    const card1Benefits = [
        {
            id: 1,
            text: 'Experienced cleaning agents'
        },
        {
            id: 2,
            text: 'Close attention to detail'
        },
        {
            id: 3,
            text: 'Employed by Completly'
        }
    ];
    const card2Benefits = [
        {
            id: 1,
            text: 'Personalised services'
        },
        {
            id: 2,
            text: 'Free cancellation up to 48h before your cleaning'
        },
        {
            id: 3,
            text: 'Non-binding contract'
        }
    ];
    const card3Benefits = [
        {
            id: 1,
            text: 'Personalised follow-up'
        },
        {
            id: 2,
            text: 'Processing of requests within 48h'
        },
        {
            id: 3,
            text: 'Reactivity and flexibility assured'
        }
    ];
    return (
        <div className='my-16'>
            <Container>
                <h3 className='text-primary text-3xl font-bold'>What do you benefit from Completly?</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8'>
                    <Card benefits={card1Benefits} />
                    <Card benefits={card2Benefits} />
                    <Card benefits={card3Benefits} />
                </div>
                <h3 className='text-primary text-3xl font-bold mt-16'>Serviceklick the service platform - known from the media</h3>
                <div className='grid grid-cols-1 sm:grid-cols-6'>
                    <div className='flex justify-center sm:justify-start'><img src={Nau} alt='media' /></div>
                    <div className='flex justify-center sm:justify-start'><img src={Jung} alt='media' /></div>
                </div>
            </Container>
        </div>
    )
}

export default Benefits