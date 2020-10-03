import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Dashboard from "./Dashboard/index";

const App = () => {
    const [smallScreen, setSmallScreen] = React.useState(false);

    React.useEffect(() => {
        window.innerWidth < 989 ? setSmallScreen(true) : setSmallScreen(false);
    }, []);

    return (
        <div style={{ overflow: "hidden" }}>
            <BrowserRouter>
                <Navbar smallScreen={smallScreen} />
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={() => (
                            <Dashboard smallScreen={smallScreen} />
                        )}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
