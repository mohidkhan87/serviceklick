import { useState } from 'react'
import React from 'react'
import Container from '../../ui/Container'

const Services = () => {
    const [openTab, setOpenTab] = useState(0);
    const tabsData = [
        { isDisabled: false, title: 'Cleaning' },
        { isDisabled: false, title: 'Handyman' },
        { isDisabled: false, title: 'Hospitality' },
        { isDisabled: true, title: 'Wellness' },
    ]
    const [tabs] = useState(tabsData);
    const handleTab = (tabNumber) => {
        setOpenTab(tabNumber)
    }

    return (
        <div>
            <Container>
                <div className="mb-4 border-b border-darkGray border-opacity-50">
                    <ul className="flex">
                        {tabs.map((item, index) =>
                            <li className={!item.isDisabled ? 'cursor-pointer': 'cursor-not-allowed'} key={index}>
                                <div className='h-8 flex items-end'>
                                    {item.isDisabled &&
                                        <span className='block text-xs text-center w-full text-darkGray'>
                                            Coming Soon
                                        </span>
                                    }
                                    {!item.isDisabled &&
                                        <span className='block text-xs text-center w-full text-darkGray'>
                                            &nbsp;
                                        </span>
                                    }
                                </div>
                                {!item.isDisabled &&
                                    <div
                                        className={"inline-block pb-4 px-4 text-xl font-medium text-center hover:text-secondary border-b-2 hover:border-secondary transition-all duration-200 ease-in-out "
                                            + (openTab === index ? "text-secondary border-secondary" : "text-primary border-transparent")}
                                        onClick={() => handleTab(index)}>
                                        {item.title}
                                    </div>
                                }
                                {item.isDisabled &&
                                    <div
                                        className="inline-block pb-4 px-4 text-xl font-medium text-darkGray border-transparent text-center border-b-2 transition-all duration-200 ease-in-out">
                                        {item.title}
                                    </div>
                                }
                            </li>
                        )}
                    </ul>
                </div>
                <div>
                    <div className={openTab === 0 ? "block" : "hidden"}>
                        1
                    </div>
                    <div className={openTab === 1 ? "block" : "hidden"}>
                        2
                    </div>
                    <div className={openTab === 2 ? "block" : "hidden"}>
                        3
                    </div>
                    <div className={openTab === 3 ? "block" : "hidden"}>
                        4
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Services