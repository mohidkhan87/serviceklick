import React, { useState } from "react";
import { Link } from "react-router-dom";

import Container from "../../ui/Container";
import CustomModalVideo from "../../shared/CustomModalVideo";

import Nav from "./Nav";
import Section from "./Section";
import PostCard from "../../shared/cards/PostCard";

import thumbnailImage from "../../../assets/images/pages/blog-post/thumbnail.png";
import PlayCircle from "../../../assets/images/shared/play-circle.svg";

const Content = () => {
    const [currentActive, setCurrentActive] = useState(1);
    const changeCurrentActive = (val) => {
        setCurrentActive(val);
    };
    const [isOpen, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!isOpen);
    };
    const postsData = [
        { title: "Getting Started with Completely", category: "Using Completly" },
        { title: "Providing clear job instructions", category: "General" },
        { title: "Get help with payments", category: "Payments" },
        { title: "Manage your account", category: "Using Completly" },
    ];
    return (
        <div className="border-t border-borderGray">
            <Container>
                <div className="mt-4">
                    <p className="text-base text-primary">
                        <span className="inline-block font-bold pb-px border-b border-darkGray">
                            <Link to="/">Home</Link>
                        </span>{" "}
                        <span className="font-light">/ Terms</span>
                    </p>
                </div>
                <CustomModalVideo isOpen={isOpen} handleOpen={handleOpen} />
                <div className="flex gap-8 2xl:gap-16 mb-16">
                    <div className="hidden lg:block w-60 2xl:w-72 bg-white sticky top-0 h-max pt-10">
                        <Nav
                            currentActive={currentActive}
                            changeCurrentActive={changeCurrentActive}
                        />
                    </div>
                    <div className="flex-1 pt-10">
                        <div className="w-4/5">
                            <div>
                                <p className="text-primary text-lg mt-5">
                                    Using Completely
                                </p>
                                <h2 className="text-primary text-2xl 2xl:text-4xl font-bold">
                                    Getting started with Completely
                                </h2>
                                <div className="my-5 w-auto relative">
                                    <img
                                        src={thumbnailImage}
                                        alt="Thumbnail"
                                        className="w-full cursor-pointer"
                                    />
                                    <div
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                                        onClick={() => handleOpen()}
                                    >
                                        <img
                                            src={PlayCircle}
                                            alt="Video Banner"
                                            className="w-16 h-16"
                                        />
                                    </div>
                                </div>
                                <p className="mt-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                                    scelerisque sit cras arcu quam nunc pulvinar elit suspendisse.
                                    Arcu vitae eu aliquet et, tempus dictumst.
                                </p>
                            </div>
                            <h3 className="text-primary text-xl 2xl:text-2xl font-bold pt-10">Headline</h3>
                            <p className="text-primary text-base font-light mt-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper nisl nulla habitant aliquam. Vulputate posuere non ullamcorper aliquam sed pretium fusce eget risus. Mauris egestas risus feugiat urna, blandit faucibus fermentum platea gravida. Eget varius nascetur mauris porttitor suspendisse praesent est. Diam nisl magnis massa dignissim volutpat. Placerat mauris suspendisse ut sapien rhoncus accumsan pharetra massa cursus. At egestas id amet donec cursus. Morbi vestibulum, diam mattis vestibulum, lorem sed. Eros, mi quisque integer purus scelerisque dui. At arcu et arcu, semper ut mollis. Lacus, nulla lacus enim venenatis a. Porttitor id tempor nam tellus orci, cras a. In lectus pellentesque dictum enim imperdiet diam convallis aliquam, quis. Eu interdum nunc morbi ac.
                            </p>
                            <p className="text-primary text-base font-light mt-5">
                                Risus mollis odio vitae faucibus quisque. Feugiat a duis magnis cum morbi in elit proin. Viverra sed ipsum elit quis quisque. Neque turpis pellentesque tortor, risus tristique amet. Vel quis ornare quam diam, elementum tincidunt iaculis facilisis. Aliquam mattis risus ut purus at habitasse sed. Magna tincidunt magna egestas orci gravida integer libero.
                            </p>
                            <p className="text-primary text-base font-light mt-5">
                                Urna vivamus vestibulum risus eget facilisi. Eu enim mus sit consectetur. Et aliquam porta in pharetra at urna habitasse amet in. Pharetra in lorem diam varius massa pellentesque quis in elit. Enim nulla id elit vitae molestie mi sed porttitor risus.
                            </p>
                            <p className="text-primary text-base font-light mt-5">
                                Nisl tellus mattis id adipiscing gravida nec enim magna. Odio consequat maecenas neque integer sagittis convallis. Non consectetur suspendisse aliquam et, adipiscing. Quis augue dictum euismod eget aliquam purus neque. Praesent non turpis ut id. A quis dignissim ut elementum mattis proin quis. Amet, eget cursus ullamcorper venenatis amet. Proin id blandit magna in aenean ligula eu velit mauris. Eget et vestibulum amet faucibus viverra aliquam ac lectus. Urna pretium consectetur et mauris, diam lorem. Suspendisse consectetur in amet tristique arcu, enim eu vehicula egestas.
                            </p>
                            <p className="text-primary text-base font-light mt-5">
                                Nam elementum varius eu rhoncus eget ultricies eget. Mi praesent netus enim magna auctor nisl ac. Commodo potenti eu, dignissim consequat orci nulla in sagittis blandit. Tincidunt vitae, diam non est sed eget. Amet, rhoncus convallis faucibus quam neque massa aliquam. Ultrices erat tempus, ut viverra odio mauris. Risus, vitae nunc at suspendisse fermentum non.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {postsData.map((item, index) => (
                        <div key={index}>
                            <PostCard title={item.title} category={item.category} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Content;