import React from "react";
import { withRouter } from "react-router-dom";

import Display from "./Display";
import Categories from "./Categories";
import Gallery from "./Gallery";

const Dashboard = (props) => {
    return (
        <div style={{ padding: "0 32px" }}>
            <Display />
            <Categories />
            <Gallery />
        </div>
    );
};

export default withRouter(Dashboard);
