import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import { gridImages } from "../../Constants/gridImages";
import "./Gallery.css";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 5,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        background: "#7d5732"
    },
    tile: {
        borderRadius: 5
    },
    gridList: {
        width: 1000
    },
}));

const Gallery = () => {
    const cellHeight = {
        desktopVisitor: 290,
        mobileVisitor: 300
    };
    const classes = useStyles();

    const [isMobileVisitor, setMobileVisitor] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);

        if (window.innerWidth < 600) {
            setMobileVisitor(true);
        }
    }, []);

    const openImage = (selectedPhotoIndex) => {
        document.body.style.overflow = "hidden";

        setPhotoIndex(selectedPhotoIndex);
        setIsOpen(true);
    }

    const closeImage = () => {
        document.body.style.overflow = "unset";

        setIsOpen(false);
    }

    return (
        <div className="Gallery">
            <div className={classes.root}>
                <GridList
                    cellHeight={!isMobileVisitor ? cellHeight.desktopVisitor : cellHeight.mobileVisitor}
                    className={classes.gridList}
                    cols={3}
                >
                    {
                        gridImages.map((tile, i) => (
                            <GridListTile
                                className="grid-list-tile"
                                key={i}
                                cols={!isMobileVisitor ? tile.cols : 3}
                                onClick={() => openImage(i)}
                            >
                                <img src={tile.img} alt={tile.title} />
                            </GridListTile>
                        ))
                    }
                </GridList>
            </div>

            {
                isOpen && (
                    <Lightbox
                        mainSrc={gridImages[photoIndex].img}
                        nextSrc={gridImages[(photoIndex + 1) % gridImages.length].img}
                        prevSrc={gridImages[(photoIndex + gridImages.length - 1) % gridImages.length].img}
                        onCloseRequest={() => closeImage(false)}
                        onMovePrevRequest={() => setPhotoIndex((photoIndex + gridImages.length - 1) % gridImages.length)}
                        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % gridImages.length)}
                    />
                )
            }
        </div>
    )
}

export default Gallery;
