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
        setDrawerVisibility,
        navigationItems
    } = props;

    const listItemIconSwitch = (param) => {
        switch (param) {
            case "Home":
                return <HomeIcon />;
            case "Gallery":
                return <ImageIcon />;
            case "Machines":
                return <AirlineSeatFlatIcon />;
            case "Contact":
                return <EmailIcon />;
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
                    navigationItems.map((item, i) => {
                        return (
                            <ListItem
                                button
                                component={Link}
                                to={item.routeTo}
                                className={classes.listItem}
                                key={i}
                            >
                                <ListItemIcon>
                                    {listItemIconSwitch(item.label)}
                                </ListItemIcon>
                                <ListItemText primary={item.label} />
                            </ListItem>
                        )
                    })
                }
            </List>
        </Drawer>
    )
}

export default Menu;
