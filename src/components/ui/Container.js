import React from 'react'

const Container = ({ children }) => {
    return (
        <div className='px-5 sm:px-16 lg:px-28 xl:px-40'>
            {children}
        </div>
    )
}

export default Container