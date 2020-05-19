import React, { useState, useEffect } from "react";

import CarouselPreview from "./CarouselPreview";
import DevicesPreview from "./DevicesPreview";
import PricelistPreview from "./PricelistPreview";
import ContactPreview from "./ContactPreview";
import "./Home.css";

const Home = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="Home">
            <CarouselPreview index={index} handleSelect={handleSelect} />
            <DevicesPreview />
            <PricelistPreview />
            <ContactPreview />
        </div>
    );
};

export default Home;
