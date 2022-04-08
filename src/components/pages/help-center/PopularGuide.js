import React from "react";
import { Link } from "react-router-dom";

import Container from "../../ui/Container";

const PopularGuide = () => {
    return (
        <div>
            <Container>
                <h2 className="text-primary text-2xl font-bold">Most Popular Guides</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 mt-5">
                    <div>
                        <h2 className="text-primary font-bold border-b-2 border-primary w-max text-lg"><Link to="/blog-post">Cancelling your booked service</Link></h2>
                        <p className="text-darkGray mt-3">
                            If you need to make a change to your order, including cancelling,
                            find out the best ways to do this.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-primary font-bold border-b-2 border-primary w-max text-lg"><Link to="/blog-post">Cancelling your booked service</Link></h2>
                        <p className="text-darkGray mt-3">
                            If you need to make a change to your order, including cancelling,
                            find out the best ways to do this.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-primary font-bold border-b-2 border-primary w-max text-lg"><Link to="/blog-post">Cancelling your booked service</Link></h2>
                        <p className="text-darkGray mt-3">
                            If you need to make a change to your order, including cancelling,
                            find out the best ways to do this.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-primary font-bold border-b-2 border-primary w-max text-lg"><Link to="/blog-post">Cancelling your booked service</Link></h2>
                        <p className="text-darkGray mt-3">
                            If you need to make a change to your order, including cancelling,
                            find out the best ways to do this.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-primary font-bold border-b-2 border-primary w-max text-lg"><Link to="/blog-post">Cancelling your booked service</Link></h2>
                        <p className="text-darkGray mt-3">
                            If you need to make a change to your order, including cancelling,
                            find out the best ways to do this.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-primary font-bold border-b-2 border-primary w-max text-lg"><Link to="/blog-post">Cancelling your booked service</Link></h2>
                        <p className="text-darkGray mt-3">
                            If you need to make a change to your order, including cancelling,
                            find out the best ways to do this.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PopularGuide;
