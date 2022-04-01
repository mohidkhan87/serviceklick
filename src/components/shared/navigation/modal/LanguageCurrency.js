import React, {useState} from "react";

import Switzerland from "../../../../assets/images/pages/homepage/switzerland.svg";
import visa from "../../../../assets/images/pages/homepage/switzerland.svg";
import mastercard from "../../../../assets/images/pages/homepage/mastercard.svg";
import amex from "../../../../assets/images/pages/homepage/amex.svg";
import applePay from "../../../../assets/images/pages/homepage/apple-pay.svg";
import gpay from "../../../../assets/images/pages/homepage/gpay.svg";

const LanguageCurrency = (props) => {
    const [isOption, setIsOption] = useState("language");

    const comingSoonLang = [
        {
            id: 1,
            title: "Espanol",
        },
        {
            id: 2,
            title: "Türkce",
        },
        {
            id: 3,
            title: "Polnisch",
        },
        {
            id: 4,
            title: "Luxembourgish",
        },
        {
            id: 5,
            title: "Tschechisch",
        },
        {
            id: 6,
            title: "Tschechisch",
        },
        {
            id: 7,
            title: "Albanian",
        },
    ];

    const paymentOptions = [
        {
            id: 1,
            name: "Visa",
            detail: "Kreditkarten",
            image: visa,
        },
        {
            id: 2,
            name: "Master Card",
            detail: "Kreditkarten",
            image: mastercard,
        },
        {
            id: 1,
            name: "Amex",
            detail: "Kreditkarten",
            image: amex,
        },
        {
            id: 1,
            name: "Apple Pay",
            detail: "Comming Soon",
            image: applePay,
        },
        {
            id: 1,
            name: "Google Pay",
            detail: "Comming Soon",
            image: gpay,
        },
    ];

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-start">
            <div
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 cursor-pointer z-10"
                onClick={() => props.handleShowLangauges(false)}
            ></div>
            <div className="region-modal relative bg-lightGray rounded-lg overflow-y-scroll scrollbar-none p-6 mt-24 text-black z-20">
                <div className="flex gap-5 border-b-2 border-darkGray border-opacity-50 w-max ">
                    <h1
                        className={`transition duration-200 ease-linear sm:text-base text-sm sm:font-bold font-semibold -mb-0.5 cursor-pointer pb-1 ${isOption === "language"
                                ? "border-b-2 border-secondary text-secondary"
                                : "text-darkGray"
                            }`}
                        onClick={() => setIsOption("language")}
                    >
                        Language and Region
                    </h1>

                    <h1
                        className={`transition duration-200 ease-linear sm:text-base text-sm sm:font-bold font-semibold -mb-0.5 cursor-pointer pb-1 ${isOption === "payment"
                                ? "border-b-2 border-secondary text-secondary"
                                : "text-darkGray"
                            }`}
                        onClick={() => setIsOption("payment")}
                    >
                        Payment
                    </h1>
                </div>
                {isOption === "language" ? (
                    <div>
                        <h1 className="text-lg font-semibold mt-10">Choose a region</h1>
                        <button className="mt-2 py-2 px-4 font-medium text-sm flex items-center bg-white rounded-full">
                            <img src={Switzerland} alt="region" className="mr-2" />
                            Schweiz
                        </button>
                        {/*  */}
                        <h1 className="text-lg font-semibold mt-10">Choose a Language</h1>
                        <div className="flex items-center flex-wrap gap-3">
                            <button className="mt-2 py-2 px-4 font-medium text-sm flex items-center hover:bg-white transition-all duration-200 ease-linear rounded-full">
                                Deutsch
                            </button>
                            <button className="mt-2 py-2 px-4 font-medium text-sm flex items-center hover:bg-white transition-all duration-200 ease-linear rounded-full">
                                English
                            </button>
                            <button className="mt-2 py-2 px-4 font-medium text-sm flex items-center hover:bg-white transition-all duration-200 ease-linear rounded-full">
                                French
                            </button>
                        </div>
                        {/*  */}
                        <h1 className="text-lg font-semibold mt-10">Coming Soon</h1>
                        <div className="flex items-center flex-wrap gap-3 pt-4">
                            {comingSoonLang.map((arr, index) => (
                                <p key={index} className="text-sm text-darkGray">{arr.title}</p>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div>
                        <h1 className="text-lg font-semibold mt-10">Currency</h1>
                        <div className="mt-2 py-2 px-5 font-medium text-sm flex items-start w-max bg-white rounded-full">
                            <img src={Switzerland} alt="region" className="mt-0.5 mr-2" />
                            <div className="text-left">
                                <h1 className="text-sm font-medium leading-4">Swiss franc</h1>
                                <p className="text-sm font-medium leading-4">CHF</p>
                            </div>
                        </div>
                        <h1 className="text-lg font-semibold mt-10">Payment Option</h1>
                        <div className="flex items-center flex-wrap gap-3">
                            {paymentOptions.map((pay, index) => (
                                <div
                                    className="mt-2 py-2 px-5 font-medium text-sm flex items-start w-max bg-white rounded-full"
                                    key={index}
                                >
                                    <img
                                        src={pay.image}
                                        alt="region"
                                        className="flex-shrink-0 mt-0.5 mr-2"
                                    />
                                    <div className="text-left">
                                        <h1 className="text-sm font-medium leading-4">
                                            {pay.name}
                                        </h1>
                                        <p className="text-sm font-medium text-darkGray leading-4">
                                            {pay.detail}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LanguageCurrency;
