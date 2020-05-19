import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import "./Home.css";

const useStyles = makeStyles((theme) => ({
    button: {
        color: "white",
        borderColor: "white",
        outline: "none !important",
        margin: 10,
        fontSize: 14,
        [theme.breakpoints.up("md")]: {
            fontSize: 20,
        }
    },
}));

const PricelistPreview = () => {
    const classes = useStyles();

    return (
        <div className="pricelist-preview">
            <div className="hider"></div>
            <div className="pricelist-img img1"></div>
            <div className="pricelist-img img2"></div>
            <div className="pricelist-img img3"></div>

            <div className="button-container">
                <Button variant="outlined" size="large" classes={{ root: classes.button }}>
                    Cenovnik
                </Button>
                <Button variant="outlined" size="large" classes={{ root: classes.button }}>
                    Galerija
                </Button>
            </div>
        </div>
    )
}

export default PricelistPreview;
