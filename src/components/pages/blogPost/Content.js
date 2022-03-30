import React, { useState } from "react";
import { Link } from "react-router-dom";

import Container from "../../ui/Container";
import Nav from "./Nav";
import Section from "./Section";
import PostCard from '../../shared/cards/PostCard'

import thumbnailImage from '../../../assets/images/pages/blog-post/thumbnail.png'

const Content = () => {
    const [currentActive, setCurrentActive] = useState(1)
    const changeCurrentActive = (val) => {
        setCurrentActive(val)
    }
    const postData = [
        { title: 'Getting Started with Completely', category: 'Using Completly' },
        { title: 'Providing clear job instructions', category: 'General' },
        { title: 'Get help with payments', category: 'Payments' },
        { title: 'Manage your account', category: 'Using Completly' },
    ];
    return (
        <div>
            <Container>
                <div className="mt-4">
                    <p className="text-base text-primary">
                        <span className="inline-block font-bold pb-px border-b border-darkGray"><Link to='/'>Home</Link></span> <span className="font-light">/ Terms</span>
                    </p>
                </div>
                <div className="flex gap-8 2xl:gap-16 mb-10">
                    <div className="hidden lg:block w-60 2xl:w-72 bg-white sticky top-0 h-max pt-10">
                        <Nav currentActive={currentActive} changeCurrentActive={changeCurrentActive} />
                    </div>
                    <div className="flex-1 pt-10">
                        <div>
                            <p className="text-primary font-medium text-lg">
                                Article Category
                            </p>
                            <h2 className="text-primary text-3xl 2xl:text-5xl font-bold">
                                Article Heading
                            </h2>
                            <div className="my-5">
                                <img src={thumbnailImage} alt="Thumbnail" className="cursor-pointer" />
                            </div>
                        </div>
                        <Section
                            id="1"
                            title="Headline"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper nisl nulla habitant aliquam. Vulputate posuere non ullamcorper aliquam sed pretium fusce eget risus. Mauris egestas risus feugiat urna, blandit faucibus fermentum platea gravida. Eget varius nascetur mauris porttitor suspendisse praesent est. Diam nisl magnis massa dignissim volutpat. Placerat mauris suspendisse ut sapien rhoncus accumsan pharetra massa cursus. At egestas id amet donec cursus. Morbi vestibulum, diam mattis vestibulum, lorem sed. Eros, mi quisque integer purus scelerisque dui. At arcu et arcu, semper ut mollis. Lacus, nulla lacus enim venenatis a. Porttitor id tempor nam tellus orci, cras a. In lectus pellentesque dictum enim imperdiet diam convallis aliquam, quis. Eu interdum nunc morbi ac."
                        />
                        <Section
                            id="2"
                            title="Headline 2"
                            text="Risus mollis odio vitae faucibus quisque. Feugiat a duis magnis cum morbi in elit proin. Viverra sed ipsum elit quis quisque. Neque turpis pellentesque tortor, risus tristique amet. Vel quis ornare quam diam, elementum tincidunt iaculis facilisis. Aliquam mattis risus ut purus at habitasse sed. Magna tincidunt magna egestas orci gravida integer libero."
                        />
                        <Section
                            id="3"
                            title="Headline 3"
                            text="Urna vivamus vestibulum risus eget facilisi. Eu enim mus sit consectetur. Et aliquam porta in pharetra at urna habitasse amet in. Pharetra in lorem diam varius massa pellentesque quis in elit. Enim nulla id elit vitae molestie mi sed porttitor risus."
                        />
                        <Section
                            id="4"
                            title="Headline 4"
                            text="Nisl tellus mattis id adipiscing gravida nec enim magna. Odio consequat maecenas neque integer sagittis convallis. Non consectetur suspendisse aliquam et, adipiscing. Quis augue dictum euismod eget aliquam purus neque. Praesent non turpis ut id. A quis dignissim ut elementum mattis proin quis. Amet, eget cursus ullamcorper venenatis amet. Proin id blandit magna in aenean ligula eu velit mauris. Eget et vestibulum amet faucibus viverra aliquam ac lectus. Urna pretium consectetur et mauris, diam lorem. Suspendisse consectetur in amet tristique arcu, enim eu vehicula egestas."
                        />
                        <Section
                            id="5"
                            title="Headline 5"
                            text="Nam elementum varius eu rhoncus eget ultricies eget. Mi praesent netus enim magna auctor nisl ac. Commodo potenti eu, dignissim consequat orci nulla in sagittis blandit. Tincidunt vitae, diam non est sed eget. Amet, rhoncus convallis faucibus quam neque massa aliquam. Ultrices erat tempus, ut viverra odio mauris. Risus, vitae nunc at suspendisse fermentum non."
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {
                        postData.map((item, index) =>
                            <div key={index}>
                                <PostCard title={item.title} category={item.category} />
                            </div>
                        )
                    }
                </div>
            </Container>
        </div>
    );
};

export default Content;
