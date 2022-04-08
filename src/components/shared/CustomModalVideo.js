import React from 'react'

import 'react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video'

const CustomModalVideo = ({isOpen, handleOpen}) => {
    return (
        <div>
            <React.Fragment>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => handleOpen()} />
            </React.Fragment>
        </div>
    )
}

export default CustomModalVideo