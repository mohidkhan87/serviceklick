import React, { useState } from "react";
import Container from "../../ui/Container";

const Tabs = () => {
    const [openTab, setOpenTab] = useState(0);
    const tabs = ["Cleaning", "Painter", "Chef"];
    const handleTab = (tabNumber) => {
        setOpenTab(tabNumber);
    };
    return (
        <div>
            <Container>
                <div>
                    <ul className="flex">
                        {tabs.map((item, index) => (
                            <li key={index} className="mr-4">
                                <div
                                    className={
                                        "cursor-pointer border rounded-full border-customGray inline-block py-2 px-4 text-sm font-medium text-center hover:bg-primary hover:text-white transition ease-in-out duration-500 " +
                                        (openTab === index ? "text-white bg-primary" : "text-primary")
                                    }
                                    onClick={() => handleTab(index)}
                                >
                                    {item}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default Tabs;
