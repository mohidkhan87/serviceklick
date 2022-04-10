import React, { useState } from 'react'
import Container from '../../ui/Container'
import CustomModalVideo from '../../shared/CustomModalVideo'
import PlayCircle from "../../../assets/images/shared/play-circle.svg";
import sliderArrow from "../../../assets/images/pages/about-us/arrow-right.svg";
import SmallReview from '../../../assets/images/pages/categories/small-review.png'
import ReviewPic from '../../../assets/images/pages/categories/reviewPic.png'
import StarRatings from 'react-star-ratings';
const VideoReviews = () => {
    const [isOpen, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!isOpen)
    }
    return (
        <div>
            <CustomModalVideo isOpen={isOpen} handleOpen={handleOpen} />
            <Container>
                <h3 className="text-primary text-2xl 2xl:text-3xl mb-4 font-bold mt-16">
                    Local cleaners you can rely on!
                </h3>
                <div className="flex flex-col lg:flex-row">
                    <div className="relative flex-1">
                        <img src={ReviewPic} alt="ReviewPic" className="w-full" />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer' onClick={() => handleOpen()}>
                            <img src={PlayCircle} alt="Video Banner" className='w-16 h-16' />
                        </div>
                    </div>
                    <div className="flex-1 bg-skyBlue py-12 px-5 md:px-10">
                        <h2 className="text-primary font-bold text-2xl">
                            How James saved money using Completely to find a professional, high-quality and local cleaning service.
                        </h2>
                        <div className="flex gap-2 mt-5">
                            <div>
                                <img src={SmallReview} alt="review" />
                            </div>
                            <div className="flex-1 flex flex-col justify-start items-center">
                                <p className="text-primary font-medium w-full">
                                    James Gomez
                                    <span>, Zürich</span>
                                    <span className="inline-block text-darkGray w-full">
                                        Verified order
                                    </span>
                                </p>
                                <p className='w-full'>
                                    <StarRatings
                                        rating={5}
                                        starRatedColor="#F8C40C"
                                        starDimension="20px"
                                        starSpacing="1px"
                                        numberOfStars={5}
                                        name='rating'
                                    />
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-end mt-8">
                            <div className="w-max opacity-50 mr-4">
                                <button
                                    className="flex justify-center items-center h-10 w-10 rounded-full bg-white transform -rotate-180 p-2"
                                >
                                    <img src={sliderArrow} alt="arrow" className="w-4" />
                                </button>
                            </div>
                            <div className="w-max">
                                <button
                                    className="flex justify-center items-center h-10 w-10 rounded-full bg-white p-2"
                                >
                                    <img src={sliderArrow} alt="arrow" className="w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default VideoReviews