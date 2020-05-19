import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Icon from "@mdi/react";
import { mdiFacebook, mdiInstagram } from "@mdi/js";

import "./Footer.css";


const useStyles = makeStyles((theme) => ({
    button: {
        outline: "none !important",
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className="Footer">
            <div className="social-section">
                <div>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/bodyspacenovisad/">
                        <Button classes={{ root: classes.button }}>
                            <Icon path={mdiFacebook} size={2} color="white" />
                        </Button>
                    </a>
                </div>
                <div>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/studiobodyspace/">
                        <Button classes={{ root: classes.button }}>
                            <Icon path={mdiInstagram} size={2} color="white" />
                        </Button>
                    </a>
                </div>
            </div>
            Copyright © {new Date().getFullYear()}
        </div>
    )
}

export default Footer;
