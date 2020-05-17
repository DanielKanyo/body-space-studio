import React, { useState } from "react";

import Carousel from "react-bootstrap/Carousel";

import "./Home.css";

const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <React.Fragment>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className="carousel-picture img0"></div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-picture img1"></div>

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-picture img2"></div>

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </React.Fragment>
    );
};

export default Home;
