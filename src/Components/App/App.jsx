import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../Home/Home";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Devices from "../Devices/Devices";
import Pricelist from "../Pricelist/Pricelist";

const App = () => {
    return (
        <Router>
            <div>
                <Navigation />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/devices">
                        <Devices />
                    </Route>
                    <Route exact path="/pricelist">
                        <Pricelist />
                    </Route>
                </Switch>

                <Footer />
            </div>
        </Router>
    );
};

export default App;
