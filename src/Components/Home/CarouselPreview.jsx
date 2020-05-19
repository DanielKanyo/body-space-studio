import React from "react";

import { FacebookProvider, Like } from "react-facebook";
import Carousel from "react-bootstrap/Carousel";

import "./Home.css";

const CarouselPreview = (props) => {
    return (
        <Carousel activeIndex={props.index} onSelect={props.handleSelect}>
            <Carousel.Item>
                <div className="carousel-picture img1"></div>

                <Carousel.Caption>
                    <h3>Pratite nas na fejzbuku</h3>
                    <div>
                        <FacebookProvider appId="">
                            <Like href="https://www.facebook.com/bodyspacenovisad" layout="button_count" action="recommend" share />
                        </FacebookProvider>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carousel-picture img2"></div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carousel-picture img3"></div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carousel-picture img4"></div>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselPreview;
