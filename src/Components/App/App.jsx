import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../Home/Home";
import Navigation from "../Navigation/Navigation";

const App = () => {
    return (
        <Router>
            <div>
                <Navigation />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
