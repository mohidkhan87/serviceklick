import React from "react";

const LoadButton = () => {
    return (
        <div>
            <div className="flex justify-center mt-8">
                <button className="border rounded-full px-5 py-2.5 border-darkGray inline-flex items-center">
                    Load more
                    <svg
                        width="14"
                        height="16"
                        className="ml-4"
                        viewBox="0 0 14 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M13 10.5L7 15.5L1 10.5"
                            stroke="#818799"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7 15.5L7 0.5"
                            stroke="#818799"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default LoadButton;
