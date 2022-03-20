import React from 'react'
import BenefitImage from '../../../../assets/images/pages/homepage/benefit.png'

const Card = (props) => {
    return (
        <div>
            <div className='flex flex-col'>
                <div>
                    <img src={BenefitImage} alt='benefit' className='w-full' />
                </div>
                <div className='my-6'>
                    <p className='text-primary text-xl md:text-2xl font-bold'>{props.title}</p>
                </div>
                <div>
                    <p className='text-darkGray text-sm'>February 24, 2022</p>
                </div>
            </div>
        </div>
    )
}

export default Card