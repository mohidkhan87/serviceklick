import React from 'react'
import Container from '../../ui/Container'

const Business = () => {
    return (
        <div>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-5">
                    <div className="bg-skyBlue py-5 px-8">
                        <div>
                            <h2 className="text-primary font-bold text-6xl">+500</h2>
                            <p className="text-lg font-semibold">Home Service Globally</p>
                            <p className="text-darkGray">As of december 2022</p>
                        </div>
                    </div>
                    <div className="bg-skyBlue py-5 px-8">
                        <div>
                            <h2 className="text-primary font-bold text-6xl">18</h2>
                            <p className="text-lg font-semibold">Team Members</p>
                            <p className="text-darkGray">As of december 2022</p>
                        </div>
                    </div>
                    <div className="bg-skyBlue py-5 px-8">
                        <div>
                            <h2 className="text-primary font-bold text-6xl">18</h2>
                            <p className="text-lg font-semibold">Team Members</p>
                            <p className="text-darkGray">As of december 2022</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Business