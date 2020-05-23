import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

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

    const [mobileVisitor, setMobileVisitor] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);

        if (window.innerWidth < 600) {
            setMobileVisitor(true);
        }
    }, []);

    return (
        <div className="Gallery">
            <div className={classes.root}>
                <GridList
                    cellHeight={!mobileVisitor ? cellHeight.desktopVisitor : cellHeight.mobileVisitor}
                    className={classes.gridList}
                    cols={3}
                >
                    {
                        gridImages.map((tile, i) => (
                            <GridListTile className="grid-list-tile" key={i} cols={!mobileVisitor ? tile.cols : 3}>
                                <img src={tile.img} alt={tile.title} />
                            </GridListTile>
                        ))
                    }
                </GridList>
            </div>
        </div>
    )
}

export default Gallery;
