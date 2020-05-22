import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../Home/Home";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Devices from "../Devices/Devices";
import Pricelist from "../Pricelist/Pricelist";
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";

import {
    Routes,
    home,
    gallery,
    devices,
    pricelist,
    contact
} from "../../Constants/routes";

const App = () => {

    const getComponent = (id) => {
        switch (id) {
            case home:
                return <Home />;
            case gallery:
                return <Gallery />;
            case devices:
                return <Devices />;
            case pricelist:
                return <Pricelist />;
            case contact:
                return <Contact />;

            default:
                console.error(`Illegal route path: ${id}`)
                break;
        }
    }

    return (
        <Router>
            <div>
                <Navigation />

                <Switch>
                    {
                        Routes.map((route, i) => {
                            return (
                                <Route key={i} exact path={route.path}>
                                    {getComponent(route.id)}
                                </Route>
                            )
                        })
                    }
                </Switch>

                <Footer />
            </div>
        </Router>
    );
};

export default App;
