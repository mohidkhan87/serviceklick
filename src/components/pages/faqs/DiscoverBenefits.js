import React, {useState} from 'react'

import Container from '../../ui/Container'
import CustomModalVideo from '../../shared/CustomModalVideo'

import VideoBanner from '../../../assets/images/pages/faqs/video-banner.png'
import PlayCircle from '../../../assets/images/shared/play-circle.svg'

const DiscoverBenefits = (props) => {
    const [isOpen, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!isOpen)
    }
    return (
        <section>
            <Container>
                <h3 className="text-primary text-2xl 2xl:text-3xl font-bold text-center">
                    {props.title}
                </h3>
                <p className='text-darkGray text-base md:text-lg font-light text-center mt-2'>
                    {props.description}
                </p>
                <CustomModalVideo isOpen={isOpen} handleOpen={handleOpen} />
                <div className='relative mt-5'>
                    <img src={VideoBanner} alt="Video Banner" className='w-full' />
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer' onClick={() => handleOpen()}>
                        <img src={PlayCircle} alt="Video Banner" className="w-20 h-20 md:w-full md:h-auto" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default DiscoverBenefits