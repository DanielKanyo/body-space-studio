import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { pathToDevices } from "../../Constants/routes";
import "./Home.css";

const useStyles = makeStyles((theme) => ({
    button: {
        color: "white !important",
        borderColor: "white",
        outline: "none !important",
        fontSize: 14,
        [theme.breakpoints.up("md")]: {
            fontSize: 20,
        }
    },
}));

const DevicesPreview = () => {
    const classes = useStyles();

    return (
        <div className="devices-preview">
            <div className="devices-image"></div>
            <div className="content">
                <div className="text-and-btn-container">
                    <div className="text">Naše usluge</div>
                    <Button
                        component={Link}
                        to={pathToDevices}
                        variant="outlined"
                        size="large"
                        classes={{ root: classes.button }}
                    >
                        Detalje
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default DevicesPreview;
