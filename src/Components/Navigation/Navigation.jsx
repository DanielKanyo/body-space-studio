import React, { useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Menu from "../Menu/Menu";
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
    menuButton: {
        "&:focus": {
            outline: "none"
        }
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
        }
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none",
        }
    }
}));

const Navigation = () => {
    const classes = useStyles();

    const [drawerVisibility, setDrawerVisibility] = useState(false);
    const navigationItems = [
        {
            routeTo: ROUTES.home,
            label: "Home",
        },
        {
            routeTo: ROUTES.gallery,
            label: "Gallery"
        },
        {
            routeTo: ROUTES.machines,
            label: "Machines"
        },
        {
            routeTo: ROUTES.contact,
            label: "Contact"
        }
    ];

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Body Space Studio
                    </Typography>

                    <div className={classes.sectionDesktop}>
                        {
                            navigationItems.map((item, i) => {
                                return (
                                    <Button
                                        key={i}
                                        component={Link}
                                        to={item.routeTo}
                                        color="inherit"
                                        className={classes.linkButton}
                                    >
                                        {item.label}
                                    </Button>
                                )
                            })
                        }
                    </div>

                    <div className={classes.sectionMobile}>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                            onClick={() => setDrawerVisibility(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>

            <Menu
                navigationItems={navigationItems}
                drawerVisibility={drawerVisibility}
                setDrawerVisibility={setDrawerVisibility}
            />
        </div>
    );
};

export default Navigation;
