import React from 'react'
import Container from '../../../ui/Container'

const Figures = () => {
    return (
        <div>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-5">
                    <div className="bg-skyBlue py-5 px-8">
                        <div>
                            <p className="text-base font-normal">Earn up to a month on Serviceklick</p>
                            <h2 className="text-primary font-bold text-6xl my-2"><span className='text-xl'>CHF</span>6,450</h2>
                            <p className="text-darkGray">As of February 2022</p>
                        </div>
                    </div>
                    <div className="bg-skyBlue py-5 px-8">
                        <div>
                            <p className="text-base font-normal">Active jobbers</p>
                            <h2 className="text-primary font-bold text-6xl my-2">+1000</h2>
                            <p className="text-darkGray">As of February 2022</p>
                        </div>
                    </div>
                    <div className="bg-skyBlue py-5 px-8">
                        <div>
                            <p className="text-base font-normal">Jobs done</p>
                            <h2 className="text-primary font-bold text-6xl my-2">6`850</h2>
                            <p className="text-darkGray">As of February 2022</p>
                        </div>
                    </div>
                    <div className="bg-skyBlue py-5 px-8">
                        <div>
                            <p className="text-base font-normal">A Service is Bought Every</p>
                            <h2 className="text-primary font-bold text-6xl my-2">23 Min</h2>
                            <p className="text-darkGray">As of February 2022</p>
                        </div>
                    </div>
                    <div className="bg-skyBlue py-5 px-8">
                        <div>
                            <p className="text-base font-normal">Average rating of jobbers</p>
                            <h2 className="text-primary font-bold text-6xl my-2">4.9/5</h2>
                            <p className="text-darkGray">As of February 2022</p>
                        </div>
                    </div>
                    <div className="bg-skyBlue py-5 px-8">
                        <div>
                            <p className="text-base font-normal">Kundenzufriedenheit</p>
                            <h2 className="text-primary font-bold text-6xl my-2">98%</h2>
                            <p className="text-darkGray">As of February 2022</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Figures