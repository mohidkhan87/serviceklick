import React, { useState } from "react";

import Container from "../../ui/Container";

import ArrowDown from "../../../assets/images/pages/faqs/arrow-down.svg";
import ArrowUp from "../../../assets/images/pages/faqs/arrow-up.svg";

const Faqs = () => {
    const questionsAnswers = [
        { id: 1, question: "What is included in this service?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Dolor facilisis neque elit congue feugiat dolorullamcorper dolor. Et arcu suspendisse lorem sed euismod.", isOpen: false },
        { id: 2, question: "What is included in this service?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Dolor facilisis neque elit congue feugiat dolorullamcorper dolor. Et arcu suspendisse lorem sed euismod.", isOpen: false },
        { id: 3, question: "What is included in this service?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Dolor facilisis neque elit congue feugiat dolorullamcorper dolor. Et arcu suspendisse lorem sed euismod.", isOpen: false },
        { id: 4, question: "What is included in this service?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Dolor facilisis neque elit congue feugiat dolorullamcorper dolor. Et arcu suspendisse lorem sed euismod.", isOpen: false },
        { id: 5, question: "What is included in this service?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Dolor facilisis neque elit congue feugiat dolorullamcorper dolor. Et arcu suspendisse lorem sed euismod.", isOpen: false },
    ];
    const questionsAnswers2 = [
        { id: 6, question: "What is included in this service?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Dolor facilisis neque elit congue feugiat dolorullamcorper dolor. Et arcu suspendisse lorem sed euismod.", isOpen: false },
        { id: 7, question: "What is included in this service?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Dolor facilisis neque elit congue feugiat dolorullamcorper dolor. Et arcu suspendisse lorem sed euismod.", isOpen: false },
        { id: 8, question: "What is included in this service?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Dolor facilisis neque elit congue feugiat dolorullamcorper dolor. Et arcu suspendisse lorem sed euismod.", isOpen: false },
        { id: 9, question: "What is included in this service?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Dolor facilisis neque elit congue feugiat dolorullamcorper dolor. Et arcu suspendisse lorem sed euismod.", isOpen: false },
        { id: 10, question: "What is included in this service?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Dolor facilisis neque elit congue feugiat dolorullamcorper dolor. Et arcu suspendisse lorem sed euismod.", isOpen: false },
    ];
    const [myArray, updateMyArray] = useState(questionsAnswers);
    const [myArray2, updateMyArray2] = useState(questionsAnswers2);
    const handleClick = (index) => {
        // 1. Make a shallow copy of the array
        let newQuestionsAnswers = [...questionsAnswers];

        // 2. Make a shallow copy of the element you want to mutate
        let temp_element = { ...newQuestionsAnswers[index] };

        // 3. Update the property you're interested in
        temp_element.isOpen = !temp_element.isOpen;

        // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
        newQuestionsAnswers[index] = temp_element;

        console.log(questionsAnswers, newQuestionsAnswers)

        // 5. Set the state to our new copy
        updateMyArray(newQuestionsAnswers);
    }
    const handleClick2 = (index) => {
        let newQuestionsAnswers = [...questionsAnswers];
        let temp_element = { ...newQuestionsAnswers[index] };
        temp_element.isOpen = !temp_element.isOpen;
        newQuestionsAnswers[index] = temp_element;
        updateMyArray2(newQuestionsAnswers);
    }

    return (
        <section>
            <Container>
                <div className="flex flex-row flex-wrap gap-2 mb-5">
                    <div>
                        <button className="bg-primary text-white px-4 py-2 border-2 border-transparent hover:text-white hover:bg-primary hover:border-primary rounded-full cursor-pointer text-xs transition-colors duration-300 ease-in-out">Payment</button>
                    </div>
                    <div>
                        <button className="bg-white text-primary px-4 py-2 border-2 border-darkGray hover:text-white hover:bg-primary hover:border-primary rounded-full cursor-pointer text-xs transition-colors duration-300 ease-in-out">Cancellation</button>
                    </div>
                    <div>
                        <button className="bg-white text-primary px-4 py-2 border-2 border-darkGray hover:text-white hover:bg-primary hover:border-primary rounded-full cursor-pointer text-xs transition-colors duration-300 ease-in-out">Chef</button>
                    </div>
                    <div>
                        <button className="bg-white text-primary px-4 py-2 border-2 border-darkGray hover:text-white hover:bg-primary hover:border-primary rounded-full cursor-pointer text-xs transition-colors duration-300 ease-in-out">Payment</button>
                    </div>
                </div>
                <h2 className="text-primary text-3xl 2xl:text-4xl font-bold mb-8">
                    Frequently Asked Questions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                    <div>
                        <h3 className="text-primary text-2xl 2xl:text-3xl font-bold">
                            Most Popular Guides
                        </h3>
                        <div className="flex flex-col gap-5">
                            {myArray.map((item, index) => (
                                <div className="border-b border-customGray pb-7 mt-10" key={item.id}>
                                    <div className="flex justify-between cursor-pointer" onClick={() => handleClick(index)}>
                                        <div>
                                            <p className="text-textGray font-bold text-lg">
                                                {item.question}
                                            </p>
                                        </div>
                                        <div>
                                            <img src={item.isOpen ? ArrowUp : ArrowDown} alt="Arrow" />
                                        </div>
                                    </div>
                                    {
                                        item.isOpen &&
                                        <div className="mt-5">
                                            <p className="text-textGray">
                                                {item.answer}
                                            </p>
                                        </div>
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-primary text-2xl 2xl:text-3xl font-bold">
                            Most Popular Guides
                        </h3>
                        <div className="flex flex-col gap-5">
                            {myArray2.map((item, index) => (
                                <div className="border-b border-customGray pb-7 mt-10" key={item.id}>
                                    <div className="flex justify-between cursor-pointer" onClick={() => handleClick2(index)}>
                                        <div>
                                            <p className="text-textGray font-bold text-lg">
                                                {item.question}
                                            </p>
                                        </div>
                                        <div>
                                            <img src={item.isOpen ? ArrowUp : ArrowDown} alt="Arrow" />
                                        </div>
                                    </div>
                                    {
                                        item.isOpen &&
                                        <div className="mt-5">
                                            <p className="text-textGray">
                                                {item.answer}
                                            </p>
                                        </div>
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Faqs;
