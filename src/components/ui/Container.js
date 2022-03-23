import React from 'react'

const Container = ({ children }) => {
    return (
        <div className='container mx-auto px-5 sm:px-16 lg:px-28'>
            {children}
        </div>
    )
}

export default Container