import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import LaunchIcon from '@material-ui/icons/Launch';
import Tooltip from '@material-ui/core/Tooltip';

import GoogleMap from "../Contact/GoogleMap";
import { pathToContact } from "../../Constants/routes";

const useStyles = makeStyles({
    button: {
        margin: 10,
        outline: 'none !important',
        color: 'rgba(0, 0, 0, 0.54) !important'
    }
});

const ContactPreview = (props) => {
    const classes = useStyles();

    const { showButton } = props;

    return (
        <div className="contact-preview">
            <div className="building-img">
                {
                    showButton && (
                        <Tooltip title="Kontakt" placement="right">
                            <IconButton
                                aria-label="open-contact"
                                className={classes.button}
                                component={Link}
                                to={pathToContact}
                            >
                                <LaunchIcon />
                            </IconButton>
                        </Tooltip>
                    )
                }
            </div>
            <div>
                <GoogleMap />
            </div>
        </div>
    )
}

export default ContactPreview
