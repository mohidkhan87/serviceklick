import React from 'react'

import Container from '../../ui/Container'

import Jung from "../../../assets/images/pages/homepage/jung.png";
import Nau from "../../../assets/images/pages/homepage/nau.png";

const Media = () => {
    return (
        <div>
            <Container>
                <h3 className="text-primary text-2xl md:text-3xl font-bold">
                    Serviceklick the service platform - known from the media
                </h3>
                <div className="flex items-center sm:justify-start justify-center flex-col sm:flex-row gap-4 mt-3">
                    <div className="overflow-hidden px-3">
                        <img src={Nau} alt="media" />
                    </div>
                    <div className="overflow-hidden px-3">
                        <img src={Jung} alt="media" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Media