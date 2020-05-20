import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import ImageIcon from "@material-ui/icons/Image";
import AirlineSeatFlatIcon from "@material-ui/icons/AirlineSeatFlat";
import EmailIcon from "@material-ui/icons/Email";
import HelpIcon from "@material-ui/icons/Help";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

import { Routes } from "../../Constants/routes";

const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
    },
    listItem: {
        "&:hover": {
            color: "rgba(0, 0, 0, 0.87)"
        }
    }
}));

const Menu = (props) => {
    const classes = useStyles();
    const {
        drawerVisibility,
        setDrawerVisibility
    } = props;

    const listItemIconSwitch = (param) => {
        switch (param) {
            case "home":
                return <HomeIcon />;
            case "gallery":
                return <ImageIcon />;
            case "devices":
                return <AirlineSeatFlatIcon />;
            case "contact":
                return <EmailIcon />;
            case "pricelist":
                return <MonetizationOnIcon />;
            default:
                console.error(`Unknown paramtere: ${param}`);
                return <HelpIcon />;
        }
    }

    return (
        <Drawer
            anchor="left"
            open={drawerVisibility}
            onClose={() => setDrawerVisibility(false)}
        >
            <List className={classes.list}>
                {
                    Routes.map((route, i) => {
                        return (
                            <ListItem
                                button
                                component={Link}
                                to={route.path}
                                className={classes.listItem}
                                onClick={() => setDrawerVisibility(false)}
                                key={i}
                            >
                                <ListItemIcon>
                                    {listItemIconSwitch(route.id)}
                                </ListItemIcon>
                                <ListItemText primary={route.label} />
                            </ListItem>
                        )
                    })
                }
            </List>
        </Drawer>
    )
}

export default Menu;
