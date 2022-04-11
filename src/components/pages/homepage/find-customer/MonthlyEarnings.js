import React from 'react'
import Container from '../../../ui/Container'
import Sussane from '../../../../assets/images/pages/homepage/find-customer/sussane.png'
import Peter from '../../../../assets/images/pages/homepage/find-customer/peter.png'
import Julia from '../../../../assets/images/pages/homepage/find-customer/julia.png'

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
                                <th className='text-justify'>&nbsp;</th>
                                <th className='text-justify'>Partner Name</th>
                                <th className='text-justify'>Workspace</th>
                                <th className='text-justify'>Earnings</th>
                                <th className='text-justify'>Hours Worked</th>
                                <th className='text-justify'>Earning Per Hour</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='py-2'>
                                <td className='py-2'><div className='w-max'><img src={Sussane} alt="Sussane" className='w-full' /></div></td>
                                <td className='py-2'>Sussane</td>
                                <td className='py-2'>Cleaner</td>
                                <td className='py-2'>CHF 1`490</td>
                                <td className='py-2'>41 Hours</td>
                                <td className='py-2'>CHF 36 Per Hour</td>
                            </tr>
                            <tr className='py-2'>
                                <td className='py-2'><div className='w-max'><img src={Peter} alt="Peter" className='w-full' /></div></td>
                                <td className='py-2'>Peter</td>
                                <td className='py-2'>Painter</td>
                                <td className='py-2'>CHF 1`490</td>
                                <td className='py-2'>41 Hours</td>
                                <td className='py-2'>CHF 36 Per Hour</td>
                            </tr>
                            <tr>
                                <td className='py-2'><div className='w-max'><img src={Julia} alt="Julia" className='w-full' /></div></td>
                                <td className='py-2'>Julio</td>
                                <td className='py-2'>Chef</td>
                                <td className='py-2'>CHF 1`490</td>
                                <td className='py-2'>41 Hours</td>
                                <td className='py-2'>CHF 36 Per Hour</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    )
}

export default MonthlyEarnings