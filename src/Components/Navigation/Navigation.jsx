import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { ROUTES } from "../../Constants/routes";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appbar: {
        background: "#b59a3f",
        position: "fixed",
        zIndex: 10
    },
    linkButton: {
        marginLeft: 12,
        "&:hover": {
            color: "#fff"
        }
    },
    title: {
        flexGrow: 1
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
}));

const Navigation = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Body Space Studio
                    </Typography>

                    <div className={classes.sectionDesktop}>
                        <Button component={Link} to={ROUTES.gallery} color="inherit" className={classes.linkButton}>
                            Gallery
                        </Button>
                        <Button component={Link} to={ROUTES.contact} color="inherit" className={classes.linkButton}>
                            Machines
                        </Button>
                        <Button component={Link} to={ROUTES.contact} color="inherit" className={classes.linkButton}>
                            Contact
                        </Button>
                        <Button component={Link} to={ROUTES.home} color="inherit" className={classes.linkButton}>
                            Home
                        </Button>
                    </div>

                    <div className={classes.sectionMobile}>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navigation;
