import React from "react";

import { FacebookProvider, Like } from "react-facebook";
import Carousel from "react-bootstrap/Carousel";
import { facebookApiKey } from "../../Constants/apiKeys";

import "./Home.css";

const CarouselPreview = (props) => {
    return (
        <Carousel activeIndex={props.index} onSelect={props.handleSelect}>
            <Carousel.Item>
                <div className="carousel-picture img1"></div>

                <Carousel.Caption>
                    <h4>Follow us on Facebook and Instagram</h4>
                    <div className='fb-container'>
                        <FacebookProvider appId={facebookApiKey}>
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
