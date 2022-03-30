import React from "react";

import Container from "../ui/Container";
import PostCard from "./cards/PostCard"

const Posts = (props) => {
    return (
        <div>
            <Container>
                <h3 className="text-primary text-2xl 2xl:text-3xl mb-4 font-bold">
                    { props.title }
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-10">
                    {
                        props.postsData.map((item, index) =>
                            <div key={index}>
                                <PostCard title={item.title} category={item.category} date={item.date} />
                            </div>
                        )
                    }
                </div>
            </Container>
        </div>
    );
};

export default Posts;
