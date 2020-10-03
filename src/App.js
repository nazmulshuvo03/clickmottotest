import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Dashboard from "./Dashboard/index";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
