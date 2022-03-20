import React from 'react'
import Container from '../../ui/Container'
import Card from './news/Card'

const News = () => {
    return (
        <div>
            <Container>
                <h3 className='text-primary text-3xl font-bold'>News &amp; Resources</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8'>
                    <Card title='How to find local professionals for pretty much anything.' />
                    <Card title='How to find local professionals for pretty much anything.' />
                    <Card title='How to find local professionals for pretty much anything.' />
                </div>
            </Container>
        </div>
    )
}

export default News