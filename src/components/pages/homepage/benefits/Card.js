import React from 'react'
import BenefitImage from '../../../../assets/images/pages/homepage/benefit.png'
import TickCircle from '../../../../assets/images/pages/homepage/tick-circle.svg'

const Card = (props) => {
    const content = props.benefits.map((benefit) =>
        <div className='flex gap-5 mt-2' key={benefit.id}>
            <div><img src={TickCircle} alt="tick" /></div>
            <div><p className='text-darkGray text-base font-medium'>{benefit.text}</p></div>
        </div>
    );
    return (
        <div>
            <div className='flex flex-col'>
                <div>
                    <img src={BenefitImage} alt='benefit' className='w-full' />
                </div>
                <div className='mt-4'>
                    <p className='text-primary text-xl font-medium'>Professional and qualified employees</p>
                </div>
                <div className='mt-4'>
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Card