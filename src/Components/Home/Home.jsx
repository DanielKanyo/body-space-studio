import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-bootstrap/Carousel";
import Button from "@material-ui/core/Button";

import GoogleMap from "../Contact/GoogleMap";

import "./Home.css";

const useStyles = makeStyles((theme) => ({
    button: {
        color: "white",
        borderColor: "white",
        outline: "none !important",
        fontSize: 14,
        [theme.breakpoints.up("md")]: {
            fontSize: 20,
        }
    },
}));

const Home = () => {
    const classes = useStyles();

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="Home">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className="carousel-picture img1"></div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-picture img2"></div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-picture img3"></div>
                </Carousel.Item>
            </Carousel>

            <div className="machines-preview">
                <div className="machines-image"></div>
                <div className="content">
                    <div className="text-and-btn-container">
                        <div className="text">Pogledajte naše mašine</div>
                        <Button variant="outlined" size="large" classes={{ root: classes.button }}>
                            Pogledanje
                        </Button>
                    </div>
                </div>
            </div>

            <div className="pricelist-preview">
                <div className="hider"></div>
                <div className="pricelist-img img1"></div>
                <div className="pricelist-img img2"></div>
                <div className="pricelist-img img3"></div>

                <div className="button-container">
                    <Button variant="outlined" size="large" classes={{ root: classes.button }}>
                        Cenovnik
                    </Button>
                </div>
            </div>

            <div className="contact-preview">
                <GoogleMap />
            </div>

        </div>
    );
};

export default Home;
