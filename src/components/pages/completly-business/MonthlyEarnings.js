import React from 'react'
import Container from '../../ui/Container'

const MonthlyEarnings = () => {
    return (
        <div className='bg-skyBlue py-16'>
            <Container>
                <h2 className='text-primary font-bold text-3xl'>Sneak Peak Into Montly Earnings</h2>
                <p className='text-darkGray font-medium mt-4'>Here are some examples of what our workers earn on average.</p>
                <div className='mt-5'>    
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className='text-justify'>Partner Name</th>
                                <th className='text-justify'>Workspace</th>
                                <th className='text-justify'>Earnings</th>
                                <th className='text-justify'>Hours Worked</th>
                                <th className='text-justify'>Earning Per Hour</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='py-2'>
                                <td className='py-4'>Sussane</td>
                                <td className='py-4'>Cleaner</td>
                                <td className='py-4'>CHF 1`490</td>
                                <td className='py-4'>41 Hours</td>
                                <td className='py-4'>CHF 36 Per Hour</td>
                            </tr>
                            <tr className='py-2'>
                                <td className='py-4'>Peter</td>
                                <td className='py-4'>Painter</td>
                                <td className='py-4'>CHF 1`490</td>
                                <td className='py-4'>41 Hours</td>
                                <td className='py-4'>CHF 36 Per Hour</td>
                            </tr>
                            <tr>
                                <td className='py-4'>Julio</td>
                                <td className='py-4'>Chef</td>
                                <td className='py-4'>CHF 1`490</td>
                                <td className='py-4'>41 Hours</td>
                                <td className='py-4'>CHF 36 Per Hour</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    )
}

export default MonthlyEarnings